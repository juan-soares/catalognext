export interface IUser {
  id: string;
  nickname: string;
  avatar: string;
}

export interface IUserAPI extends IUser {
  password: string;
  email: string;
}

export interface IUserLogged extends IUser {
  token: string;
}
