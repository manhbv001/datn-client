import fetcher from '@/libs/fetcher';
import { OAuthProviders } from '@/types/common';
import { IUser } from '@/types/user';

export interface ILoginPayload {
  email: string;
  password: string;
}
export type ILoginResponse = string;
export interface IOAuthPayload extends Omit<IRegisterPayload, 'password'> {
  provider: OAuthProviders;
  expire_time?: string | number;
}

export interface IRegisterPayload {
  username: string;
  email: string;
  fullname: string;
  password: string;
}

const authServices = {
  login(payload: ILoginPayload) {
    return fetcher.clientReq<ILoginResponse>('auth/login', {
      body: JSON.stringify(payload),
      method: 'post',
    });
  },
  logout() {
    return fetcher.clientReq('auth/logout');
  },
  verify() {
    return fetcher.clientReq<IUser>('auth/me');
  },
  register(payload: IRegisterPayload) {
    return fetcher.clientReq('auth/register', {
      body: JSON.stringify(payload),
      method: 'post',
    });
  },
};

export default authServices;
