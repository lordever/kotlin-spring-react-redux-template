import React, { FC, memo, PropsWithChildren } from 'react';

interface AlertProps extends PropsWithChildren {}

const Alert: FC<AlertProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 top-2 z-0 h-full w-full rounded-md bg-black opacity-10" />

      <div className="relative z-10 flex items-center justify-center rounded-md bg-purple-700 py-[17px] text-white">
        <span className="text-preset-3">{children}</span>
      </div>
    </div>
  );
};

export default memo(Alert);
