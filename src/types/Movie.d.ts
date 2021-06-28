export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  releaseDate: string;
  avgVotePercentage: number;
}

export interface MovieState {
  data: Movie[];
  totalPages: number;
  currentPage: number;
}

export interface MovieLoadPayload {
  movies: Movie[];
  currentPage: number;
  totalPages: number;
}

interface LoadMoviesSuccessAction {
  type: string;
  payload: MovieLoadPayload;
}

export type MovieActionTypes = LoadMoviesSuccessAction;
