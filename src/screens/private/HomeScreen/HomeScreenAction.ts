import axios from "axios";
import { Dispatch } from "redux";
import { LoadMoviesSuccess } from "../../../store/Movies/MoviesAction";
import {
  API_KEY,
  IMAGE_BASE_URL,
  GET_POPULAR_MOVIES,
  IMAGE_DEFAULT_WIDTH,
} from "../../../utils/constants";

const fetchMovies = (page: number): any => {
  return (dispatch: Dispatch): Promise<any> =>
    new Promise((resolve, reject) => {
      axios
        .get(`${GET_POPULAR_MOVIES}?api_key=${API_KEY}&page=${page}`)
        .then((response: any) => {
          const payload = response.data;
          const movies = payload.results.map((movieData: any) => {
            return {
              id: movieData.id,
              title: movieData.title,
              imageUrl: `${IMAGE_BASE_URL}/${IMAGE_DEFAULT_WIDTH}/${movieData.poster_path}`,
              releaseDate: movieData.release_date,
              avgVotePercentage: movieData.vote_average * 10,
            };
          });
          const loadMoviePayload = {
            currentPage: payload.page,
            totalPages: payload.total_pages,
            movies,
          };
          dispatch(LoadMoviesSuccess(loadMoviePayload));
          resolve("Feched more movies");
        })
        .catch((error) => {
          reject(error.message);
        });
    });
};

export { fetchMovies };
