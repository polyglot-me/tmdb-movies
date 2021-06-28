export interface User {
  age: number;
  username: string;
  password: string;
}

export interface UserState {
  data: { [key: string]: User };
}

interface CreateUserAction {
  type: string;
  payload: User;
}
