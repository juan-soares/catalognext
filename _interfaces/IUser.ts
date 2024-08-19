export interface IUser {
  nickname: string;
  avatar: string;
}

export interface IUserAPI extends IUser {
  password: string;
  email: string;
}
