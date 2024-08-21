export interface IDatabase {
  users: IUser[];
}

export interface IUser {
  id: string;
  nickname: string;
  password: string;
  avatar: string;
  email: string;
}
