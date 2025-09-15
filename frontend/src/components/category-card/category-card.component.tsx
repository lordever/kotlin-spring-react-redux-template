import React, { memo, useMemo } from 'react';
import { CategoryTypes } from './category-card.model';
import clsx from 'clsx';
import { TimeCategories } from '../../model/time-categories.model';
import { getPreviousTimeMessage } from './category-card.utils';
import {
  CategoryTypesColorMap,
  CategoryTypesImageMap,
  CategoryTypesTitleMap,
} from './category-card.constants';

const CategoryCardSkeleton = () => (
  <>
    <div className="flex animate-pulse flex-col items-start justify-start gap-2">
      <div className="mb-6 h-2 w-20 rounded bg-gray-200 xl:w-40"></div>
      <div className="h-5 w-36 rounded bg-gray-200 xl:w-40"></div>
      <div className="h-5 w-20 rounded bg-gray-200 xl:w-40"></div>
    </div>
  </>
);

type CategoryCardProps = {
  type: CategoryTypes;
  timeCategory: TimeCategories;
  spentTime: string;
  previousSpentTime: string;
  loading?: boolean;
};

const CategoryCard = ({
  type,
  timeCategory,
  previousSpentTime,
  spentTime,
  loading,
}: CategoryCardProps) => {
  const previousTime = useMemo(() => {
    return getPreviousTimeMessage(timeCategory, previousSpentTime);
  }, [timeCategory, previousSpentTime]);

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
          alt={type}
        />
      </div>

      <div className="relative -top-[20px] h-full rounded-2xl bg-navy-900 p-8">
        {loading && <CategoryCardSkeleton />}

        {!loading && (
          <div className="flex flex-col gap-6">
            <p className="text-preset-5-medium text-white">
              {CategoryTypesTitleMap[type]}
            </p>

            <div className="flex flex-col gap-5">
              <h2 className="text-preset-1 text-white">{spentTime}</h2>
              <p className="text-preset-6 text-navy-200">{previousTime}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(CategoryCard);
