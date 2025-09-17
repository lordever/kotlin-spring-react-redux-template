import React, { FC, memo, useEffect, useState } from 'react';
import CategoryCard from './category-card.component';
import { TimeCategories } from '../../model/time-categories.model';
import { CategoryTypes } from './category-card.model';
import { getCategoryCards } from '../../api/categoryCards.api';
import { CategoryCardsResponseModel } from '../../model/category-card-response.model';

type CategoryCardContainerProps = {
  userId: string;
  timeCategory: TimeCategories;
};

const CategoryCardContainer: FC<CategoryCardContainerProps> = ({
  userId,
  timeCategory,
}) => {
  const [loading, setLoading] = useState(true);
  const [categoryCards, setCategoryCards] =
    useState<CategoryCardsResponseModel>();

  useEffect(() => {
    getCategoryCards(userId)
      .then((data) => {
        setCategoryCards(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);

  const SKELETON_TYPES: CategoryTypes[] = [
    CategoryTypes.WORK,
    CategoryTypes.PLAY,
    CategoryTypes.STUDY,
    CategoryTypes.EXERCISE,
    CategoryTypes.SOCIAL,
    CategoryTypes.SELF_CARE,
  ];

  if (loading) {
    return (
      <>
        {SKELETON_TYPES.map((t) => (
          <div key={`skeleton-${t}`} className="col-span-1 xl:row-span-1">
            <CategoryCard
              timeCategory={timeCategory as TimeCategories}
              spentTime=""
              previousSpentTime=""
              loading
              type={t}
            />
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {categoryCards?.[timeCategory]?.map(
        ({ type, spentTime, previousSpentTime }) => (
          <div key={`${type}`} className="col-span-1 xl:row-span-1">
            <CategoryCard
              timeCategory={timeCategory as TimeCategories}
              spentTime={spentTime}
              previousSpentTime={previousSpentTime}
              type={type}
            />
          </div>
        ),
      )}
    </>
  );
};

export default memo(CategoryCardContainer);
