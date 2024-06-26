import {
  API_REQUEST_OPTIONS,
  TMDB_API_DOMAIN,
  MediaType,
} from "utils/assets";
import useTranslations from "hooks/useTranslations";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";
import SampleList from "components/sample/SampleList";
import { RootState } from "store/appStore";
import { CommonMediaInterface, ContentIteratorInterface } from "hooks/types";
import { type LanguageType } from "utils/translations/types";

const SearchResults = () => {
  const searchQuery = useSelector((state: RootState) => state.search.searchQuery);
  const TRANSLATIONS: LanguageType = useTranslations();
  const [movies, setMovies] = useState<CommonMediaInterface[]>([]);
  const [tvShows, setTvShows] = useState<CommonMediaInterface[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchApi = async (query: string) => {
    const response = await fetch(
      `${TMDB_API_DOMAIN}/search/multi?query=${query}&page=1&include_adult=true`,
      API_REQUEST_OPTIONS
    );
    const results = await response.json();

    setIsSearching(false);

    let moviesFromSearch: CommonMediaInterface[] = results?.results.filter(
      (result: CommonMediaInterface) => result.media_type === MediaType.MOVIE
    );
    setMovies(moviesFromSearch);
    let tvShows: CommonMediaInterface[] = results?.results.filter((result: CommonMediaInterface) => result.media_type === MediaType.TV);
    setTvShows(tvShows);
  };

  const doSearch = useMemo(() => {
    setIsSearching(true);
    return debounce(searchApi, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const content: ContentIteratorInterface[] = [
    {
      id: "search-movies",
      title: TRANSLATIONS.searchResults.movies,
      samples: movies,
      sampleType: MediaType.MOVIE,
    },
    {
      id: "search-tvshows",
      title: TRANSLATIONS.searchResults.tvShows,
      samples: tvShows,
      sampleType: MediaType.TV,
    },
  ];

  const filteredContent = content.filter(
    (section) => section.samples.length > 0
  );

  useEffect(() => {
    doSearch(searchQuery);
  }, [searchQuery, doSearch]);

  return (
    <div className="h-screen w-full layout-padding flex flex-col justify-center">
      {isSearching && (
        <div className="text-white xs:text-sm m:text-xl text-center">
          {TRANSLATIONS.searchResults.searching}
        </div>
      )}
      {!isSearching &&
        filteredContent.map((section) => {
          return <SampleList sectionData={section} key={section.id} />;
        })}
    </div>
  );
};

export default SearchResults;
