import React, { memo } from 'react';

const ProfileSkeleton = () => (
  <>
    <div className="rounded-t-md bg-purple-500 p-4">
      <div className="flex animate-pulse flex-row items-center gap-6 xl:min-h-[354px] xl:flex-col xl:items-baseline xl:gap-10">
        <div className="size-16 rounded-full bg-gray-200"></div>
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="h-2 w-20 rounded bg-gray-200 xl:w-40"></div>
          <div className="h-5 w-36 rounded bg-gray-200 xl:w-40"></div>
          <div className="hidden h-5 w-20 rounded bg-gray-200 xl:block xl:w-40"></div>
        </div>
      </div>
    </div>

    <div className="flex flex-row items-center justify-center gap-2 rounded-b-md bg-navy-900 px-8 py-8 xl:flex-col xl:items-baseline">
      <div className="h-2 w-[104px] animate-pulse rounded bg-gray-200"></div>
      <div className="h-2 w-[104px] animate-pulse rounded bg-gray-200"></div>
      <div className="h-2 w-[104px] animate-pulse rounded bg-gray-200"></div>
    </div>
  </>
);

interface ProfileProps {
  loading?: boolean;
}

const Profile = ({ loading }: ProfileProps) => {
  return <div>{loading && <ProfileSkeleton />}</div>;
};

export default memo(Profile);
