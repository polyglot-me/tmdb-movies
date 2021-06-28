import { LOAD_POPULAR_MOVIES_SUCCESS } from "./MoviesActionTypes";
import {
  MovieState,
  MovieActionTypes,
  LoadMoviesSuccessAction,
} from "../../types";

const INITIAL_STATE: MovieState = {
  data: [],
  totalPages: 0,
  currentPage: 0,
};

function movieReducer(
  state = INITIAL_STATE,
  action: MovieActionTypes
): MovieState {
  switch (action.type) {
    case LOAD_POPULAR_MOVIES_SUCCESS: {
      const payload = (action as LoadMoviesSuccessAction).payload;
      return {
        ...state,
        data: [...state.data, ...payload.movies],
        totalPages: payload.totalPages,
        currentPage: payload.currentPage,
      };
    }
    default:
      return state;
  }
}

export default movieReducer;
