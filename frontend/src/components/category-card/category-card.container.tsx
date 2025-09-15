import React, { FC, useState } from 'react';
import CategoryCard from './category-card.component';
import { TimeCategories } from '../../model/time-categories.model';
import { categoryCards } from './category-card.mock';

const CategoryCardContainer: FC<{ timeCategory: TimeCategories }> = ({
  timeCategory,
}) => {
  const [loading] = useState(false);

  return (
    <>
      {categoryCards[timeCategory].map(
        ({ type, spentTime, previousSpentTime }) => (
          <div className="col-span-1 xl:row-span-1">
            <CategoryCard
              timeCategory={timeCategory as TimeCategories}
              spentTime={spentTime}
              previousSpentTime={previousSpentTime}
              loading={loading}
              type={type}
            />
          </div>
        ),
      )}
    </>
  );
};

export default CategoryCardContainer;
