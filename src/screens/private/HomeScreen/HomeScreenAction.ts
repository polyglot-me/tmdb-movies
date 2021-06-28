import moment from "moment";
import axios from "axios";
import { Dispatch } from "redux";
import { LoadMoviesSuccess } from "../../../store/Movies/MoviesAction";
import {
  API_KEY,
  IMAGE_BASE_URL,
  GET_POPULAR_MOVIES,
  IMAGE_DEFAULT_WIDTH,
} from "../../../utils/constants";
import noMovieImage from "../../../assets/no-movie-image.png";

const fetchMovies = (page: number, age: number): any => {
  let upToCertificate = "G";
  if (age > 5 && age <= 13) {
    upToCertificate = "PG";
  } else if (age > 13 && age <= 18) {
    upToCertificate = "PG-13";
  } else if (age >= 18) {
    upToCertificate = "R";
  }
  const params = {
    page: page,
    sort_by: "popularity.desc",
    include_adult: false,
    certification_country: "US",
    "certification.lte": upToCertificate,
    "primary_release_date.gte": moment()
      .subtract(3, "year")
      .format("YYYY-MM-DD"),
  };
  return (dispatch: Dispatch): Promise<any> =>
    new Promise((resolve, reject) => {
      axios
        .get(`${GET_POPULAR_MOVIES}?api_key=${API_KEY}`, { params })
        .then((response: any) => {
          const payload = response.data;
          const movies = payload.results.map((movieData: any) => {
            const posterUrl = movieData.poster_path
              ? `${IMAGE_BASE_URL}/${IMAGE_DEFAULT_WIDTH}/${movieData.poster_path}`
              : noMovieImage;
            return {
              id: movieData.id,
              title: movieData.title,
              imageUrl: posterUrl,
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
