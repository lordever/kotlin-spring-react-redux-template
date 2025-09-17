import httpClient from './httpClient';
import { UserResponseModel } from '../model/user-response.model';

export const getUserById = async (userId: string): Promise<UserResponseModel> => {
  const { data } = await httpClient.get<UserResponseModel>(`/users/${encodeURIComponent(userId)}`);
  return data;
};