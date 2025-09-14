import React, { memo } from 'react';
import { CategoryTypes } from './category-card.model';
import clsx from 'clsx';

const CategoryCardSkeleton = () => (
  <>
    <div className="flex animate-pulse flex-col items-start justify-start gap-2">
      <div className="mb-6 h-2 w-20 rounded bg-gray-200 xl:w-40"></div>
      <div className="h-5 w-36 rounded bg-gray-200 xl:w-40"></div>
      <div className="h-5 w-20 rounded bg-gray-200 xl:w-40"></div>
    </div>
  </>
);

const CategoryTypesColorMap: Record<CategoryTypes, string> = {
  [CategoryTypes.WORK]: 'bg-orange-300',
  [CategoryTypes.PLAY]: 'bg-blue-300',
  [CategoryTypes.STUDY]: 'bg-pink-400',
  [CategoryTypes.EXERCISE]: 'bg-green-400',
  [CategoryTypes.SOCIAL]: 'bg-purple-700',
  [CategoryTypes.SELF_CARE]: 'bg-yellow-300',
};

const CategoryTypesImageMap: Record<CategoryTypes, string> = {
  [CategoryTypes.WORK]: 'icon-work.svg',
  [CategoryTypes.PLAY]: 'icon-play.svg',
  [CategoryTypes.STUDY]: 'icon-study.svg',
  [CategoryTypes.EXERCISE]: 'icon-exercise.svg',
  [CategoryTypes.SOCIAL]: 'icon-social.svg',
  [CategoryTypes.SELF_CARE]: 'icon-self-care.svg',
};

type CategoryCardProps = {
  type: CategoryTypes;
  loading?: boolean;
};

const CategoryCard = ({ type, loading }: CategoryCardProps) => {
  const headerClassNames = clsx(
    CategoryTypesColorMap[type],
    'flex justify-end rounded-t-2xl px-4',
  );

  return (
    <div className="flex h-full flex-col">
      <div className={headerClassNames}>
        <img
          src={CategoryTypesImageMap[type]}
          className="h-[78px] w-[78px] object-contain"
          alt="icon-work"
        />
      </div>

      <div className="relative -top-[20px] h-full rounded-2xl bg-navy-900 p-8">
        {loading && <CategoryCardSkeleton />}
      </div>
    </div>
  );
};

export default memo(CategoryCard);
