import { CLEAR_AUTH, STORE_AUTH } from "./AuthActionTypes";
import { AuthState, AuthActionTypes, StoreAuthAction } from "../../types";

const INITIAL_STATE: AuthState = {
  data: null,
};

function authReducer(
  state = INITIAL_STATE,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case STORE_AUTH: {
      const user = (action as StoreAuthAction).payload;
      return {
        ...state,
        data: user,
      };
    }
    case CLEAR_AUTH: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}

export default authReducer;
