import React from 'react';

const DashboardContainer = () => {
  return (
    <section className="grid xl:grid-cols-4 xl:grid-rows-2 md:grid-cols-3 md:grid-rows-3 grid-cols-1 grid-rows-1 gap-8">
      {/* Block 1 */}
      <div className="xl:col-span-1 xl:row-span-2 md:col-span-3 sm:col-span-1">
        <div className="card h-full bg-purple-500 flex items-center justify-center text-white text-preset-2">
          Block 1
        </div>
      </div>

      {/* Block 2 */}
      <div className="xl:row-span-1 col-span-1">
        <div className="card h-full bg-orange-300 flex items-center justify-center text-white text-preset-2">
          Block 2
        </div>
      </div>

      {/* Block 3 */}
      <div className="xl:row-span-1 col-span-1">
        <div className="card h-full bg-blue-300 flex items-center justify-center text-white text-preset-2">
          Block 3
        </div>
      </div>

      {/* Block 4 */}
      <div className="xl:row-span-1 col-span-1">
        <div className="card h-full bg-pink-400 flex items-center justify-center text-white text-preset-2">
          Block 4
        </div>
      </div>

      {/* Block 5 */}
      <div className="xl:row-span-1 col-span-1">
        <div className="card h-full bg-green-400 flex items-center justify-center text-white text-preset-2">
          Block 5
        </div>
      </div>

      {/* Block 6 */}
      <div className="xl:row-span-1 col-span-1">
        <div className="card h-full bg-purple-700 flex items-center justify-center text-white text-preset-2">
          Block 6
        </div>
      </div>

      {/* Block 7 */}
      <div className="xl:row-span-1 col-span-1">
        <div className="card h-full bg-yellow-300 flex items-center justify-center text-white text-preset-2">
          Block 7
        </div>
      </div>
    </section>
  );
};

export default DashboardContainer;
