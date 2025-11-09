import React, { FC, memo, PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ContainerProps extends PropsWithChildren {
  variant?: 'info' | 'default';
}

const Container: FC<ContainerProps> = ({ variant = 'default', children }) => {
  const containerClassNames = clsx(
    'relative z-10 rounded-md py-[17px] px-16 text-white min-w-[327px]',
    variant === 'info' && 'bg-purple-700',
    variant === 'default' && 'bg-white',
  );

  return (
    <div className={containerClassNames}>
      <span className="text-preset-3">{children}</span>
    </div>
  );
};

export default memo(Container);
