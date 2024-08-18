import clsx from 'clsx';
import css from './customInput.module.css';
import { forwardRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDarkTheme } from 'src/redux/darkTheme/selectors';

const CustomInput = forwardRef(
  (
    {
      children,
      label = false,
      labelName = '',
      labelClass = '',
      inputType = 'text',
      inputName = '',
      placeHolder = '',
      inputClass = '',
      disabled = false,
      error = false,
      checked = false,
      onChange = () => {},
      onBlur = () => {},
      onFocus = () => {},
      ...otherProps
    },
    ref,
  ) => {
    const theme = useSelector(selectDarkTheme);
    const [isFocused, setIsFocused] = useState(false);
    const [isInactive, setIsInactive] = useState(true);

    const handleFocus = e => {
      setIsFocused(true);
      setIsInactive(false);
      if (onFocus) onFocus(e);
    };

    const handleBlur = e => {
      setIsFocused(false);
      setIsInactive(true);
      if (onBlur) onBlur(e);
    };

    return (
      <>
        {label ? (
          <>
            <label className={clsx(css.label, labelClass)}>
              {labelName}
              <input
                ref={ref}
                className={clsx(
                  css.input,
                  {
                    [css.disabled]: disabled,
                    [css.inactive]: isInactive,
                    [css.focused]: isFocused,
                    [css.error]: error,
                    [css.darkInput]: theme,
                  },
                  inputClass,
                )}
                type={inputType}
                placeholder={placeHolder}
                name={inputName}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...otherProps}
              />
              {children}
            </label>
          </>
        ) : (
          <>
            <input
              ref={ref}
              className={clsx(
                css.input,
                {
                  [css.disabled]: disabled,
                  [css.inactive]: isInactive,
                  [css.focused]: isFocused,
                  [css.error]: error,
                  [css.darkInput]: theme,
                },
                inputClass,
              )}
              type={inputType}
              placeholder={placeHolder}
              name={inputName}
              disabled={disabled}
              checked={checked}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...otherProps}
            />
            {children}
          </>
        )}
      </>
    );
  },
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
