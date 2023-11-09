import './index.css';
import { forwardRef } from 'react';
import clsx from 'clsx';

const Button = forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<'button'>>(
  ({ children, type = 'button', className }, ref) => (
    <button ref={ref} type={type} className={clsx('button', className)}>
      {children}
    </button>
  ),
);

export default Button;
