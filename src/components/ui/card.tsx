import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card: FC<CardProps> = ({ children, className, ...props }) => {
  const cardClass = classNames(
    'border rounded-lg shadow-lg p-4 bg-white',
    className
  );

  return (
    <div className={cardClass} {...props}>
      {children}
    </div>
  );
};

export const CardContent: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
  const cardContentClass = classNames(
    'p-4',
    className
  );

  return (
    <div className={cardContentClass} {...props}>
      {children}
    </div>
  );
};

export const CardFooter: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
  const cardFooterClass = classNames(
    'border-t pt-4 mt-4',
    className
  );

  return (
    <div className={cardFooterClass} {...props}>
      {children}
    </div>
  );
};
