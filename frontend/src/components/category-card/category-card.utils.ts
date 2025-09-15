import { TimeCategories } from '../../model/time-categories.model';

export function getPreviousTimeMessage(
  category: TimeCategories,
  previousSpentTime: number | string
): string {
  switch (category) {
    case TimeCategories.DAILY:
      return `Yesterday – ${previousSpentTime}`;
    case TimeCategories.WEEKLY:
      return `Last Week – ${previousSpentTime}`;
    case TimeCategories.MONTHLY:
      return `Last Month – ${previousSpentTime}`;
    default:
      return `${previousSpentTime}`;
  }
}