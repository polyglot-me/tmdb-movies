import { CREATE_USER } from "./UserActionTypes";
import { UserState, CreateUserAction } from "../../types";

const INITIAL_STATE: UserState = {
  data: {},
};

function userReducer(
  state = INITIAL_STATE,
  action: CreateUserAction
): UserState {
  switch (action.type) {
    case CREATE_USER: {
      const user = action.payload;
      return {
        ...state,
        data: { ...state.data, [user.username]: user },
      };
    }
    default:
      return state;
  }
}

export default userReducer;
