import { IBaseEntity } from './common';

export enum UserTypes {
  System = 1,
  Member = 2,
}

export interface IUser extends IBaseEntity {
  fullname: string;
  email: string;
  username: string;
  phone: string;
  password: string;
  role_id: UserTypes;
  is_super: boolean;
  avatar_url: string;
  post_count: number;
  follower_count: number;
  followings_count: number;
  like_count: number;
  view_count: number;
  followed: number;
}
