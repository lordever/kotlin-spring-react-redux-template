import React, { FC, memo, PropsWithChildren, useCallback } from 'react';
import clsx from 'clsx';

interface LinkProps extends PropsWithChildren {
  id: string;
  href: string;
  active?: boolean;
  onClick: (id: string) => void;
}

const NavLink: FC<LinkProps> = ({ id, href, active, onClick, children }) => {
  const className = clsx(
    active ? 'text-white' : 'text-purple-500 hover:text-white',
    'text-preset-5-regular',
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onClick(id);
    },
    [id, onClick],
  );

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default memo(NavLink);
