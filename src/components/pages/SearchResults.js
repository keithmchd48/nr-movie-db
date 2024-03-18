import { API_REQUEST_OPTIONS, TMDB_API_DOMAIN } from "../../utils/assets";
import useTranslations from '../../hooks/useTranslations';
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";
import SampleList from "../SampleList";

const SearchResults = () => {
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const TRANSLATIONS = useTranslations();
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  const doSearch = useMemo(() => {
    return debounce(async (query) => {
      const response = await fetch(
        `${TMDB_API_DOMAIN}/search/multi?query=${query}&page=1&include_adult=true`,
        API_REQUEST_OPTIONS
      );
      const results = await response.json();
      let movies = results?.results.filter((result) => result.media_type === "movie");
      setMovies(movies);
      let tvShows = results?.results.filter((result) => result.media_type === "tv");
      setTvShows(tvShows);
    }, 2000);
  }, []);

  const content = [
    {
      id: 'search-movies',
      title: TRANSLATIONS.searchResults.movies,
      samples: movies,
      sampleType: 'movie'
    },
    {
      id: 'search-tvshows',
      title: TRANSLATIONS.searchResults.tvShows,
      samples: tvShows,
      sampleType: 'tv'
    }
  ];

  useEffect(() => {
    doSearch(searchQuery);
  }, [searchQuery, doSearch]);

  return (
    <div className="h-screen w-full layout-padding flex flex-col justify-center">
    {content.map((section) => {
      return <SampleList sectionData={section} key={section.id} />;
    })}
    </div>
  );
};

export default SearchResults;