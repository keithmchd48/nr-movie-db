export type TCommonMedia = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  // Keys not present in all three interfaces
  first_air_date?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  media_type?: string;
  name?: string;
  origin_country?: string[];
  original_name?: string;
  original_title?: string;
};

export type TPartialCommonMedia = Partial<TCommonMedia>;

export interface TrailerInterface {
  id: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
};

export type TMovie = {
  nowPlayingMovies: TPartialCommonMedia[];
  topRatedMovies: TPartialCommonMedia[];
  upcomingMovies: TPartialCommonMedia[];
};

export interface TVInterface {
  airingToday: TPartialCommonMedia[];
  onAirShows: TPartialCommonMedia[];
  topRatedShows: TPartialCommonMedia[];
};

export interface ContentIteratorInterface {
  id: string,
  title: string;
  samples: TPartialCommonMedia[];
  sampleType: string;
};