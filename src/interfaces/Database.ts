import { Auth } from "./Auth";

export namespace Database {
  export interface IData {
    users: IUser[];
  }

  export interface IUser extends Auth.IUserInfo, Auth.ICredentials {
    id: string;
  }
}
