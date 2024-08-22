export interface ICredentials {
  password: string;
  email: string;
}

export interface IUserSession {
  token: string;
  nickname: string;
  avatar: string;
}

export interface IAuthContext {
  user: IUserSession | null;
  setUser: React.Dispatch<React.SetStateAction<IUserSession | null>>;
  credentials: ICredentials;
  setCredentials: React.Dispatch<React.SetStateAction<ICredentials>>;
}
