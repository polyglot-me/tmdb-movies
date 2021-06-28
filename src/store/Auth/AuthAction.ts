import { User } from "../../types";
import { STORE_AUTH, CLEAR_AUTH } from "./AuthActionTypes";

export const StoreAuth = (payload: User) => ({
  type: STORE_AUTH,
  payload,
});

export const ClearAuth = () => ({
  type: CLEAR_AUTH,
});
