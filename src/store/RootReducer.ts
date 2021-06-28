import authReducer from "./Auth/AuthReducer";
import userReducer from "./User/UserReducer";
import movieReducer from "./Movies/MoviesReducer";

import { combineReducers } from "redux";
import { reducer as reducerForm } from "redux-form";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  form: reducerForm,
  movie: movieReducer,
});

export default rootReducer;
