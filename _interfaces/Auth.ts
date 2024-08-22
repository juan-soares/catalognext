export interface ICredentials {
  password: string;
  email: string;
}

export interface IUserSession {
  token: string;
  nickname: string;
  avatar: string;
}

export interface IUserInfo {
  nickname: string;
  avatar: string;
}

export interface IAuthContext {
  user: IUserSession | null;
}
