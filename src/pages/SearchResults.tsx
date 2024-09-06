import {
  API_REQUEST_OPTIONS,
  TMDB_API_DOMAIN,
  EnumMedia,
} from "utils/assets";
import useTranslations from "hooks/useTranslations";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";
import SampleList from "components/sample/SampleList";
import { RootState } from "store/appStore";
import { TCommonMedia, TContentIterator } from "hooks/types";
import { type LanguageType } from "utils/translations/types";

const SearchResults = () => {
  const searchQuery = useSelector((state: RootState) => state.search.searchQuery);
  const TRANSLATIONS: LanguageType = useTranslations();
  const [movies, setMovies] = useState<TCommonMedia[]>([]);
  const [tvShows, setTvShows] = useState<TCommonMedia[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchApi = async (query: string) => {
    const response = await fetch(
      `${TMDB_API_DOMAIN}/search/multi?query=${query}&page=1&include_adult=true`,
      API_REQUEST_OPTIONS
    );
    const results = await response.json();

    setIsSearching(false);

    let moviesFromSearch: TCommonMedia[] = results?.results.filter(
      (result: TCommonMedia) => result.media_type === EnumMedia.MOVIE
    );
    setMovies(moviesFromSearch);
    let tvShows: TCommonMedia[] = results?.results.filter((result: TCommonMedia) => result.media_type === EnumMedia.TV);
    setTvShows(tvShows);
  };

  const doSearch = useMemo(() => {
    setIsSearching(true);
    return debounce(searchApi, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const content: TContentIterator[] = [
    {
      id: "search-movies",
      title: TRANSLATIONS.searchResults.movies,
      samples: movies,
      sampleType: EnumMedia.MOVIE,
    },
    {
      id: "search-tvshows",
      title: TRANSLATIONS.searchResults.tvShows,
      samples: tvShows,
      sampleType: EnumMedia.TV,
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
