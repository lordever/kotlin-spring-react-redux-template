import React, { useState } from 'react';
import ProfileCardContainer from '../profile-card/profile-card.container';
import CategoryCardContainer from '../category-card/category-card.container';
import { TimeCategories } from '../../model/time-categories.model';

const USER_ID = '16591f98-2104-4402-ae81-811c9b421b69';

const DashboardContainer = () => {
  const [activeTimeCategory, setActiveTimeCategory] = useState(
    TimeCategories.DAILY,
  );

  return (
    <section className="mt-20 flex h-full justify-center xl:mt-0 xl:items-center">
      <div className="mx-6 grid w-full max-w-[612px] grid-cols-1 gap-8 md:grid-cols-3 xl:max-w-[1116px] xl:grid-cols-4 xl:grid-rows-2">
        <div className="col-span-1 md:col-span-3 xl:col-span-1 xl:row-span-2">
          <ProfileCardContainer
            userId={USER_ID}
            activeNavLink={activeTimeCategory}
            onNavLinkClick={setActiveTimeCategory}
          />
        </div>

        <CategoryCardContainer
          userId={USER_ID}
          timeCategory={activeTimeCategory}
        />
      </div>
    </section>
  );
};

export default DashboardContainer;
