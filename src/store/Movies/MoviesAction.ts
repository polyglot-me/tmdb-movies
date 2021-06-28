import { MovieLoadPayload } from "../../types";
import { LOAD_POPULAR_MOVIES_SUCCESS } from "./MoviesActionTypes";

export const LoadMoviesSuccess = (payload: MovieLoadPayload) => ({
  type: LOAD_POPULAR_MOVIES_SUCCESS,
  payload,
});
