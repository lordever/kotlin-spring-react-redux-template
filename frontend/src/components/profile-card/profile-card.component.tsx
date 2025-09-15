import React, { memo, useCallback } from 'react';
import NavLink from '../common/nav-link.component';
import { TimeCategories } from '../../model/time-categories.model';

const ProfileCardSkeleton = () => (
  <>
    <div className="rounded-t-2xl bg-purple-600 p-4">
      <div className="flex animate-pulse flex-row items-center gap-6 xl:min-h-[354px] xl:flex-col xl:items-baseline xl:gap-10">
        <div className="size-16 rounded-full bg-gray-200"></div>
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="h-2 w-20 rounded bg-gray-200 xl:w-40"></div>
          <div className="h-5 w-36 rounded bg-gray-200 xl:w-40"></div>
          <div className="hidden h-5 w-20 rounded bg-gray-200 xl:block xl:w-40"></div>
        </div>
      </div>
    </div>

    <div className="flex flex-row items-center justify-center gap-2 rounded-b-2xl bg-navy-900 px-8 py-8 xl:flex-col xl:items-baseline">
      <div className="h-2 w-[104px] animate-pulse rounded bg-gray-200"></div>
      <div className="h-2 w-[104px] animate-pulse rounded bg-gray-200"></div>
      <div className="h-2 w-[104px] animate-pulse rounded bg-gray-200"></div>
    </div>
  </>
);

type ProfileCardProps = {
  loading: boolean;
  activeNavLink: TimeCategories;
  onNavClick: (navLink: TimeCategories) => void;
};

const ProfileCard = ({
  loading,
  activeNavLink,
  onNavClick,
}: ProfileCardProps) => {
  const handleNavLink = useCallback((navLink: string) => {
    onNavClick(navLink as TimeCategories);
  }, [onNavClick]);

  if (loading) {
    return <ProfileCardSkeleton />;
  }

  return (
    <>
      <div className="relative z-10 rounded-2xl bg-purple-600">
        <div className="flex flex-row items-center gap-6 px-8 py-8 xl:min-h-[354px] xl:flex-col xl:items-baseline xl:gap-10">
          <img
            src="/user-icon.png"
            alt="user-icon"
            className="w-[78px] rounded-full border-[3px] border-white shadow-2xl"
          />

          <div className="flex max-w-[138px] flex-col gap-[10px]">
            <p className="text-preset-6 text-navy-200">Report for</p>
            <h2 className="text-preset-2 text-white">Jeremy Robson</h2>
          </div>
        </div>
      </div>

      <div className="relative -top-[10px] flex flex-row items-center justify-center gap-7 rounded-b-2xl bg-navy-900 px-8 py-8 xl:flex-col xl:items-baseline">
        <NavLink
          id={TimeCategories.DAILY}
          onClick={handleNavLink}
          href="#"
          active={activeNavLink === TimeCategories.DAILY}
        >
          Daily
        </NavLink>
        <NavLink
          id={TimeCategories.WEEKLY}
          onClick={handleNavLink}
          href="#"
          active={activeNavLink === TimeCategories.WEEKLY}
        >
          Weekly
        </NavLink>
        <NavLink
          id={TimeCategories.MONTHLY}
          onClick={handleNavLink}
          href="#"
          active={activeNavLink === TimeCategories.MONTHLY}
        >
          Monthly
        </NavLink>
      </div>
    </>
  );
};

export default memo(ProfileCard);
