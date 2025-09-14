import React from 'react';
import ProfileCardContainer from '../profile-card/profile-card.container';
import { CategoryTypes } from '../category-card/category-card.model';
import CategoryCardContainer from '../category-card/category-card.container';

const DashboardContainer = () => {
  return (
    <section className="mt-20 flex h-full justify-center xl:mt-0 xl:items-center">
      <div className="mx-6 grid w-full max-w-[612px] grid-cols-1 gap-8 md:grid-cols-3 xl:max-w-[1116px] xl:grid-cols-4 xl:grid-rows-2">
        {/* Profile */}
        <div className="col-span-1 md:col-span-3 xl:col-span-1 xl:row-span-2">
          <ProfileCardContainer />
        </div>

        <div className="col-span-1 xl:row-span-1">
          <CategoryCardContainer type={CategoryTypes.WORK} />
        </div>

        <div className="col-span-1 xl:row-span-1">
          <CategoryCardContainer type={CategoryTypes.PLAY} />
        </div>

        <div className="col-span-1 xl:row-span-1">
          <CategoryCardContainer type={CategoryTypes.STUDY} />
        </div>

        <div className="col-span-1 xl:row-span-1">
          <CategoryCardContainer type={CategoryTypes.EXERCISE} />
        </div>

        <div className="col-span-1 xl:row-span-1">
          <CategoryCardContainer type={CategoryTypes.SOCIAL} />
        </div>

        <div className="col-span-1 xl:row-span-1">
          <CategoryCardContainer type={CategoryTypes.SELF_CARE} />
        </div>
      </div>
    </section>
  );
};

export default DashboardContainer;
