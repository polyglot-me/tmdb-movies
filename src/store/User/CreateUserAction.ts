import { User } from "../../types";
import { CREATE_USER } from "./UserActionTypes";

export const CreateUser = (payload: User) => ({
  type: CREATE_USER,
  payload,
});
