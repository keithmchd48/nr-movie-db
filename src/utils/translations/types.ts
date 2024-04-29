export type MonthType = {
  jan: string;
  feb: string;
  mar: string;
  apr: string;
  may: string;
  jun: string;
  jul: string;
  aug: string;
  sept: string;
  oct: string;
  nov: string;
  dec: string;
};

export interface MonthInterface {
  en: MonthType;
  dk: MonthType;
  es: MonthType;
};

export type LanguageType = {
  identifier: string;
  label: string;
  validations: {
    invalidEmail: string;
    invalidPassword: string;
    passwordMismatch: string;
    fullNameRequired: string;
    invalidCredentials: string;
  };
  auth: {
    newToApp: string;
    alreadyMember: string;
    signIn: string;
    signUp: string;
    signUpNow: string;
    signInNow: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    fullNamePlaceholder: string;
    confirmPasswordPlaceholder: string;
  };
  headerMenu: {
    home: string;
    shows: string;
    movies: string;
    searchPlaceholder: string;
  };
  profileDropdown: {
    signOut: string;
  };
  play: string;
  moreInfo: string;
  browse: {
    nowPlaying: string;
    tvShows: string;
    topRatedMovies: string;
  };
  shows: {
    airingToday: string;
    onTheAir: string;
    topRated: string;
  };
  movies: {
    nowPlaying: string;
    upcoming: string;
    topRated: string;
  };
  footer: {
    madeBy: string;
  };
  months: MonthType;
  searchResults: {
    movies: string;
    tvShows: string;
    searching: string;
  };
  error: {
    message: string;
    cta: string;
  };
  headTitles: {
    login: string;
    browse: string;
    shows: string;
    movies: string;
    error: string;
  };
  loadingText: string;
};

export interface LanguageInterface {
  en: LanguageType;
  dk: LanguageType;
  es: LanguageType;
};

export type SupportedLanguageType = {
  identifier: string;
  label: string;
};