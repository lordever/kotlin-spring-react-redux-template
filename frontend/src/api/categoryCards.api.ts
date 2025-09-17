import httpClient from './httpClient';
import { CategoryCardsResponseModel } from '../model/category-card-response.model';

export const getCategoryCards = async (
  userId: string,
): Promise<CategoryCardsResponseModel> => {
  const { data } = await httpClient.get<CategoryCardsResponseModel>(
    `/users/${encodeURIComponent(userId)}/category-cards`,
  );
  return data;
};
