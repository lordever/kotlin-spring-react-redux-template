import React, { FC, useState } from 'react';
import { CategoryTypes } from './category-card.model';
import CategoryCard from './category-card.component';
import { TimeCategories } from '../../model/time-categories.model';

type CategoryCardContainerProps = {
  name: string;
  type: CategoryTypes;
  timeCategory: TimeCategories;
  spentTime: string;
  previousSpentTime: string;
};

const CategoryCardContainer: FC<CategoryCardContainerProps> = ({
  name,
  type,
  timeCategory,
  spentTime,
  previousSpentTime,
}) => {
  const [loading, _] = useState(false);

  return (
    <CategoryCard
      timeCategory={timeCategory}
      spentTime={spentTime}
      previousSpentTime={previousSpentTime}
      loading={loading}
      type={type}
      name={name}
    />
  );
};

export default CategoryCardContainer;
