const TMDB_DOMAIN = "https://www.themoviedb.org/";

export const MAIN_LOGO = "https://keiths.sirv.com/Images/flixwatch_logo.svg";
export const BG_IMG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/5217014f-ed62-4986-aba1-dda2c976aa25/DK-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const AVATAR = "https://occ-0-387-41.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYsd3p4Qocnfa7ObBPxjmxSEFOziadI3zj5-3hDDd0iTQX5YjIIPls_WA_YpJpXAxcrfT1j6PcVMz4RTUYhIkBrvkwb4XPY.png?r=24a";
export const POSTER_PATH_URL = "https://image.tmdb.org/t/p/w780";
export const TMDB_DOMAIN_MOVIE = `${TMDB_DOMAIN}movie/`;
export const TMDB_DOMAIN_SHOW = `${TMDB_DOMAIN}tv/`;
export const TMDB_API_DOMAIN = "https://api.themoviedb.org/3";
export const YOUTUBE_DOMAIN = "https://www.youtube.com/";
export const MY_BIO_LINK = "https://bio.to/keith-dev";
export const PATHS = {
  AUTH: "/",
  BROWSE: "/browse",
  SHOWS: "/shows",
  MOVIES: "/movies",
  ERROR: "/error"
};
export const HEADER_MENU = [
  {
    name: "home",
    title: "home",
    path: PATHS.BROWSE
  },
  {
    name: "shows",
    title: "shows",
    path: PATHS.SHOWS
  },
  {
    name: "movies",
    title: "movies",
    path: PATHS.MOVIES
  }
];

export const API_REQUEST_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`
  }
};