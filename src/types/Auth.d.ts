import { User } from "./User";

export interface AuthParams {
  username: string;
  password: string;
}

export interface AuthState {
  data: User | null;
}

interface StoreAuthAction {
  type: string;
  payload: User;
}

interface ClearAuthAction {
  type: string;
}

export type AuthActionTypes = StoreAuthAction | ClearAuthAction;
