import {BaseAPI} from './base.api';

export interface Post {
  id: number;
  description: string;
  image: string;
  video?: string;
  likes: number;
}

export interface User {
  id: number;
  username: string;
  avatar: string;
}

export const getPosts = async (): Promise<Post[]> => {
  const response = await BaseAPI.get(
    '/v1.2/reels?username_or_id_or_url=____taiyo_',
    {},
  );
  return response?.data?.data;
};

export const searchUser = async (username: string): Promise<User[]> => {
  const response = await BaseAPI.get(
    `/v1/search_users?search_query=${username}`,
    {},
  );
  return response?.data?.data;
};

export const getComment = async (code: string): Promise<User[]> => {
  const response = await BaseAPI.get(
    `/v1/comments?code_or_id_or_url=${code}`,
    {},
  );
  return response?.data?.data;
};

export const getPostDetails = async (postId: number): Promise<Post> => {
  const response = await BaseAPI.get(`/posts/${postId}`);
  return response?.data?.data;
};
