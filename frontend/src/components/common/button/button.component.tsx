import React, { FC, memo, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="relative rounded-md bg-green-400 py-[15px] hover:bg-green-300 transition-transform duration-150"
      onClick={onClick}
    >
      <div className="absolute inset-0 translate-y-2 rounded-md bg-black opacity-20 -z-10" />

      <span className="relative z-10 text-preset-4-semibold text-white">{children}</span>
    </button>
  );
};

export default memo(Button);
