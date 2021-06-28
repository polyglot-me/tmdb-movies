import authReducer from "../Auth/AuthReducer";
import userReducer from "../User/UserReducer";

import { combineReducers } from "redux";
import { reducer as reducerForm } from "redux-form";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  form: reducerForm,
});

export default rootReducer;
