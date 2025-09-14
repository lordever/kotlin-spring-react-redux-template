import React, { FC, useState } from 'react';
import { CategoryTypes } from './category-card.model';
import CategoryCard from './category-card.component';

type CategoryCardContainerProps = {
  type: CategoryTypes;
};

const CategoryCardContainer: FC<CategoryCardContainerProps> = ({type}) => {
  const [loading, _] = useState(true);

  return <CategoryCard loading={loading} type={type} />;
};

export default CategoryCardContainer;
