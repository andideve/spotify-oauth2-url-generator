import './index.css';
import { forwardRef } from 'react';
import clsx from 'clsx';

const Input = forwardRef<HTMLInputElement, React.ComponentPropsWithRef<'input'>>(
  ({ type = 'text', id, name, autoComplete, required, className, ...rest }, ref) => (
    <input
      ref={ref}
      type={type}
      id={id}
      name={name}
      autoComplete={autoComplete}
      required={required}
      className={clsx('input', className)}
      {...rest}
    />
  ),
);

export default Input;
