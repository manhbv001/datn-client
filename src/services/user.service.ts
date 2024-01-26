import fetcher from '@/libs/fetcher';
import { IUser } from '@/types/user';

const userServices = {
  getUserProfile(username: string) {
    return fetcher.serverReq<IUser>(`users/${username}`, {
      next: {
        revalidate: 60,
      },
    });
  },
  getFeaturedAuthors() {
    return fetcher.clientReq<IUser[]>(`users/authors`);
  },
  follow(payload: { author_id: number }) {
    return fetcher.clientReq(`users/follow`, {
      body: JSON.stringify(payload),
      method: 'POST',
    });
  },
  followStatus(authorId: number) {
    return fetcher.clientReq<{ followed: boolean }>(
      `users/authors/${authorId}/status`,
    );
  },
  getProfileFollowers(profileId: number) {
    return fetcher.clientReq<IUser[]>(`users/profile/${profileId}/followers`);
  },
  getProfileFollowings(profileId: number) {
    return fetcher.clientReq<IUser[]>(`users/profile/${profileId}/followings`);
  },
};

export default userServices;
