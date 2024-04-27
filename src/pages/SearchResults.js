import {
  API_REQUEST_OPTIONS,
  TMDB_API_DOMAIN,
  MEDIA_TYPES,
} from "utils/assets";
import useTranslations from "hooks/useTranslations";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";
import SampleList from "components/sample/SampleList";

const SearchResults = () => {
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const TRANSLATIONS = useTranslations();
  const { MOVIE, TV } = MEDIA_TYPES;
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchApi = async (query) => {
    const response = await fetch(
      `${TMDB_API_DOMAIN}/search/multi?query=${query}&page=1&include_adult=true`,
      API_REQUEST_OPTIONS
    );
    const results = await response.json();

    setIsSearching(false);

    let movies = results?.results.filter(
      (result) => result.media_type === MOVIE
    );
    setMovies(movies);
    let tvShows = results?.results.filter((result) => result.media_type === TV);
    setTvShows(tvShows);
  };

  const doSearch = useMemo(() => {
    setIsSearching(true);
    return debounce(searchApi, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const content = [
    {
      id: "search-movies",
      title: TRANSLATIONS.searchResults.movies,
      samples: movies,
      sampleType: MOVIE,
    },
    {
      id: "search-tvshows",
      title: TRANSLATIONS.searchResults.tvShows,
      samples: tvShows,
      sampleType: TV,
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
