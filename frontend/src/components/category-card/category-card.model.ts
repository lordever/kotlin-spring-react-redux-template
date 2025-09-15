import { TimeCategories } from '../../model/time-categories.model';

export enum CategoryTypes {
  WORK = 'work',
  PLAY = 'play',
  STUDY = 'study',
  EXERCISE = 'exercise',
  SOCIAL = 'social',
  SELF_CARE = 'self_care',
}

export type CategoryCard = {
  type: CategoryTypes;
  timeCategory: TimeCategories;
  spentTime: string;
  previousSpentTime: string;
};
