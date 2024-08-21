import { FC, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import React from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const buttonClass = classNames(
    'px-4 py-2 rounded focus:outline-none focus:ring',
    {
      'bg-blue-500 text-white hover:bg-blue-600': variant === 'primary',
      'bg-gray-500 text-white hover:bg-gray-600': variant === 'secondary',
    },
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
