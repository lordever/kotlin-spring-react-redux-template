import { TimeCategories } from './time-categories.model';
import { CategoryTypes } from '../components/category-card/category-card.model';

export type CategoryCard = {
  type: CategoryTypes;
  timeCategory: TimeCategories;
  spentTime: string;
  previousSpentTime: string;
};

export type CategoryCardsResponseModel = Record<
  TimeCategories,
  Omit<CategoryCard, 'timeCategory'>[]
>;