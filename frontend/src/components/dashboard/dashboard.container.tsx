import React, { useState } from 'react';
import ProfileCardContainer from '../profile-card/profile-card.container';
import { CategoryTypes } from '../category-card/category-card.model';
import CategoryCardContainer from '../category-card/category-card.container';
import { TimeCategories } from '../../model/time-categories.model';

const DashboardContainer = () => {
  const [activeTimeCategory, setActiveTimeCategory] = useState(
    TimeCategories.DAILY,
  );

  return (
    <section className="mt-20 flex h-full justify-center xl:mt-0 xl:items-center">
      <div className="mx-6 grid w-full max-w-[612px] grid-cols-1 gap-8 md:grid-cols-3 xl:max-w-[1116px] xl:grid-cols-4 xl:grid-rows-2">
        <div className="col-span-1 md:col-span-3 xl:col-span-1 xl:row-span-2">
          <ProfileCardContainer
            activeNavLink={activeTimeCategory}
            onNavLinkClick={setActiveTimeCategory}
          />
        </div>

        <div className="col-span-1 xl:row-span-1">
          <CategoryCardContainer
            spentTime="5hrs"
            previousSpentTime="5hrs"
            timeCategory={activeTimeCategory}
            type={CategoryTypes.WORK}
            name="Work"
          />
        </div>

        <div className="col-span-1 xl:row-span-1">
          <CategoryCardContainer
            spentTime="5hrs"
            previousSpentTime="5hrs"
            timeCategory={activeTimeCategory}
            type={CategoryTypes.PLAY}
            name="Play"
          />
        </div>

        <div className="col-span-1 xl:row-span-1">
          <CategoryCardContainer
            spentTime="5hrs"
            previousSpentTime="5hrs"
            timeCategory={activeTimeCategory}
            type={CategoryTypes.STUDY}
            name="Study"
          />
        </div>

        <div className="col-span-1 xl:row-span-1">
          <CategoryCardContainer
            spentTime="5hrs"
            previousSpentTime="5hrs"
            timeCategory={activeTimeCategory}
            type={CategoryTypes.EXERCISE}
            name="Exercise"
          />
        </div>

        <div className="col-span-1 xl:row-span-1">
          <CategoryCardContainer
            spentTime="5hrs"
            previousSpentTime="5hrs"
            timeCategory={activeTimeCategory}
            type={CategoryTypes.SOCIAL}
            name="Social"
          />
        </div>

        <div className="col-span-1 xl:row-span-1">
          <CategoryCardContainer
            spentTime="5hrs"
            previousSpentTime="5hrs"
            timeCategory={activeTimeCategory}
            type={CategoryTypes.SELF_CARE}
            name="Self Care"
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardContainer;
