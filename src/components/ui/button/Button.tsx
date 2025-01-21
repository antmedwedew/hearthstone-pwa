import { FC, HTMLAttributes, ReactNode } from 'react';
import cn from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'gray';
}

export const Button: FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  return (
    <button className={cn(styles.button, props.className, styles[variant])} {...props}>
      {children}
    </button>
  );
};
