import httpClient from './httpClient';
import {CategoryCardsModel} from "../components/category-card/category-card.model";

export const getCategoryCards = async (userId: string): Promise<CategoryCardsModel> => {
  const { data } = await httpClient.get<CategoryCardsModel>(`/users/${encodeURIComponent(userId)}/category-cards`);
  return data;
};


