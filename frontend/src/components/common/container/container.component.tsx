import React, { FC, memo, PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ContainerProps extends PropsWithChildren {
  variant?: 'info' | 'default';
}

const Container: FC<ContainerProps> = ({ variant = 'default', children }) => {
  const containerClassNames = clsx(
    'relative z-10 flex items-center justify-center rounded-md py-[17px] text-white',
    variant === 'info' && 'bg-purple-700',
    variant === 'default' && 'bg-white',
  );

  return (
    <div className="relative">
      <div className="absolute inset-0 top-2 z-0 h-full w-full rounded-md bg-black opacity-10" />

      <div className={containerClassNames}>
        <span className="text-preset-3">{children}</span>
      </div>
    </div>
  );
};

export default memo(Container);
