import './index.css';
import { forwardRef } from 'react';
import clsx from 'clsx';

interface CheckboxProps extends React.ComponentPropsWithRef<'input'> {
  label?: string;
  containerClass?: string;
  containerStyle?: React.CSSProperties;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      type = 'checkbox',
      id,
      name,
      required,
      className,
      label,
      containerClass,
      containerStyle,
      ...rest
    },
    ref,
  ) => (
    <label className={clsx('checkbox-container', containerClass)} style={containerStyle}>
      <input
        ref={ref}
        type={type}
        id={id}
        name={name}
        required={required}
        className={clsx('checkbox', className)}
        {...rest}
      />
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  ),
);

export default Checkbox;
