import './index.css';

interface BaseProps {
  children?: React.ReactNode;
}

interface FormProps extends BaseProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}
interface LabelProps extends BaseProps {
  htmlFor?: string;
}

export function Root({ children, onSubmit }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="form">
      {children}
    </form>
  );
}

export function Fieldset({ children }: BaseProps) {
  return <fieldset className="form__fieldset">{children}</fieldset>;
}

export function Legend({ children }: BaseProps) {
  return <legend className="form__legend">{children}</legend>;
}

export function Field({ children }: BaseProps) {
  return <div className="form__field">{children}</div>;
}

export function Label({ children, htmlFor }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="form__label">
      {children}
    </label>
  );
}

export function Footer({ children }: BaseProps) {
  return <div className="form__footer">{children}</div>;
}
