import { CategoryTypes } from './category-card.model';

export const CategoryTypesColorMap: Record<CategoryTypes, string> = {
  [CategoryTypes.WORK]: 'bg-orange-300',
  [CategoryTypes.PLAY]: 'bg-blue-300',
  [CategoryTypes.STUDY]: 'bg-pink-400',
  [CategoryTypes.EXERCISE]: 'bg-green-400',
  [CategoryTypes.SOCIAL]: 'bg-purple-700',
  [CategoryTypes.SELF_CARE]: 'bg-yellow-300',
};

export const CategoryTypesImageMap: Record<CategoryTypes, string> = {
  [CategoryTypes.WORK]: 'icon-work.svg',
  [CategoryTypes.PLAY]: 'icon-play.svg',
  [CategoryTypes.STUDY]: 'icon-study.svg',
  [CategoryTypes.EXERCISE]: 'icon-exercise.svg',
  [CategoryTypes.SOCIAL]: 'icon-social.svg',
  [CategoryTypes.SELF_CARE]: 'icon-self-care.svg',
};

export const CategoryTypesTitleMap: Record<CategoryTypes, string> = {
  [CategoryTypes.WORK]: 'Work',
  [CategoryTypes.PLAY]: 'Play',
  [CategoryTypes.STUDY]: 'Study',
  [CategoryTypes.EXERCISE]: 'Exercise',
  [CategoryTypes.SOCIAL]: 'Social',
  [CategoryTypes.SELF_CARE]: 'Self Care',
};