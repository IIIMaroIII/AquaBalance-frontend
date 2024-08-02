import css from './button.module.css';
import clsx from 'clsx';

const Button = ({
  children,
  addClass = '',
  selected = false,
  disabled = false,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(
        css.btn,
        {
          [css.isSelected]: selected,
          [css.isDisabled]: disabled,
        },
        addClass,
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
