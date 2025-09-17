import { TimeCategories } from '../../model/time-categories.model';
import { CategoryTypes } from './category-card.model';
import { CategoryCardsResponseModel } from '../../model/category-card-response.model';

export const categoryCards: CategoryCardsResponseModel = {
  [TimeCategories.DAILY]: [
    { type: CategoryTypes.WORK, spentTime: '6hrs', previousSpentTime: '7hrs' },
    { type: CategoryTypes.PLAY, spentTime: '2hrs', previousSpentTime: '1hr' },
    { type: CategoryTypes.STUDY, spentTime: '1hr', previousSpentTime: '2hrs' },
    {
      type: CategoryTypes.EXERCISE,
      spentTime: '45min',
      previousSpentTime: '30min',
    },
    { type: CategoryTypes.SOCIAL, spentTime: '1hr', previousSpentTime: '2hrs' },
    {
      type: CategoryTypes.SELF_CARE,
      spentTime: '40min',
      previousSpentTime: '30min',
    },
  ],
  [TimeCategories.WEEKLY]: [
    {
      type: CategoryTypes.WORK,
      spentTime: '38hrs',
      previousSpentTime: '42hrs',
    },
    { type: CategoryTypes.PLAY, spentTime: '10hrs', previousSpentTime: '8hrs' },
    { type: CategoryTypes.STUDY, spentTime: '6hrs', previousSpentTime: '7hrs' },
    {
      type: CategoryTypes.EXERCISE,
      spentTime: '4hrs',
      previousSpentTime: '5hrs',
    },
    {
      type: CategoryTypes.SOCIAL,
      spentTime: '6hrs',
      previousSpentTime: '5hrs',
    },
    {
      type: CategoryTypes.SELF_CARE,
      spentTime: '5hrs',
      previousSpentTime: '4hrs',
    },
  ],
  [TimeCategories.MONTHLY]: [
    {
      type: CategoryTypes.WORK,
      spentTime: '160hrs',
      previousSpentTime: '172hrs',
    },
    {
      type: CategoryTypes.PLAY,
      spentTime: '40hrs',
      previousSpentTime: '35hrs',
    },
    {
      type: CategoryTypes.STUDY,
      spentTime: '25hrs',
      previousSpentTime: '30hrs',
    },
    {
      type: CategoryTypes.EXERCISE,
      spentTime: '18hrs',
      previousSpentTime: '20hrs',
    },
    {
      type: CategoryTypes.SOCIAL,
      spentTime: '24hrs',
      previousSpentTime: '22hrs',
    },
    {
      type: CategoryTypes.SELF_CARE,
      spentTime: '20hrs',
      previousSpentTime: '18hrs',
    },
  ],
};
