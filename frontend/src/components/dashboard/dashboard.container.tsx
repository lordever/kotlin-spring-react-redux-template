import React from 'react';
import ProfileContainer from '../profile/profile.container';

const DashboardContainer = () => {
  return (
    <section className="mt-20 flex h-full justify-center xl:mt-0 xl:items-center">
      <div className="mx-6 grid w-full max-w-[612px] grid-cols-1 gap-8 md:grid-cols-3 xl:max-w-[1116px] xl:grid-cols-4 xl:grid-rows-2">
        {/* Profile */}
        <section className="col-span-1 md:col-span-3 xl:col-span-1 xl:row-span-2">
          <ProfileContainer />
        </section>

        {/* Block 2 */}
        <div className="col-span-1 xl:row-span-1">
          <div className="card flex h-full items-center justify-center bg-orange-300 text-preset-2 text-white">
            Block 2
          </div>
        </div>

        {/*/!* Block 3 *!/*/}
        <div className="col-span-1 xl:row-span-1">
          <div className="card flex h-full items-center justify-center bg-blue-300 text-preset-2 text-white">
            Block 3
          </div>
        </div>

        {/*/!* Block 4 *!/*/}
        <div className="col-span-1 xl:row-span-1">
          <div className="card flex h-full items-center justify-center bg-pink-400 text-preset-2 text-white">
            Block 4
          </div>
        </div>

        {/*/!* Block 5 *!/*/}
        <div className="col-span-1 xl:row-span-1">
          <div className="card flex h-full items-center justify-center bg-green-400 text-preset-2 text-white">
            Block 5
          </div>
        </div>

        {/*/!* Block 6 *!/*/}
        <div className="col-span-1 xl:row-span-1">
          <div className="card flex h-full items-center justify-center bg-purple-700 text-preset-2 text-white">
            Block 6
          </div>
        </div>

        {/*/!* Block 7 *!/*/}
        <div className="col-span-1 xl:row-span-1">
          <div className="card flex h-full items-center justify-center bg-yellow-300 text-preset-2 text-white">
            Block 7
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardContainer;
