import React, { FC, memo, PropsWithChildren } from 'react';

interface AlertProps extends PropsWithChildren {}

const Alert: FC<AlertProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 h-full w-full top-2 rounded-md bg-black opacity-25" />

      <div className="relative z-10 flex items-center justify-center rounded-md bg-purple-700 py-[17px] text-white">
        <span className="text-preset-3">{children}</span>
      </div>
    </div>
  );
};

export default memo(Alert);
