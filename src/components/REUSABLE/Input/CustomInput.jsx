import clsx from 'clsx';
import css from './customInput.module.css';
import { forwardRef, useState } from 'react';

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
      activated = false,
      error = false,
      ...otherProps
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isInactive, setIsInactive] = useState(true);

    const handleFocus = () => {
      setIsFocused(true);
      setIsInactive(false);
    };

    const handleBlur = () => {
      setIsFocused(false);
      setIsInactive(true);
    };

    return (
      <>
        {label ? (
          <label className={clsx(css.label, labelClass)}>
            <input
              ref={ref}
              className={clsx(css.input, inputClass, {
                [css.disabled]: disabled,
                [css.inactive]: isInactive,
                [css.focused]: isFocused,
                [css.activated]: activated,
                [css.error]: error,
              })}
              type={inputType}
              placeholder={placeHolder}
              name={inputName}
              disabled={disabled}
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...otherProps}
            />
            {labelName}
          </label>
        ) : (
          <input
            ref={ref}
            className={clsx(css.input, inputClass, {
              [css.disabled]: disabled,
              [css.inactive]: isInactive,
              [css.focused]: isFocused,
              [css.activated]: activated,
              [css.error]: error,
            })}
            type={inputType}
            placeholder={placeHolder}
            name={inputName}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...otherProps}
          />
        )}
        {children}
      </>
    );
  },
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;

/*
Разбор кода

Импорт библиотек:
clsx: Библиотека для условного объединения классов.
css: Импортирует стили из CSS-модуля customInput.module.css.

Пропсы компонента:
children: Дочерние элементы, передаваемые в компонент. Используется для добавления элементов рядом с полем ввода, например, иконок или кнопок.
label: Указывает, будет ли отображаться элемент <label>.
labelName: Текст внутри <label>.
labelClass: Дополнительные классы для стилизации <label>.
inputType: Тип поля ввода (например, "text", "password").
inputName: Имя поля ввода.
placeHolder: Текст-подсказка внутри поля ввода.
inputClass: Дополнительные классы для стилизации <input>.
disabled: Указывает, заблокировано ли поле ввода.
inactive, focused, activated, error: Логические флаги для применения соответствующих стилей.

Рендеринг:
Если label равно true, рендерится <label> с вложенным <input> и текстом labelName.
Если label равно false, рендерится только <input>.
children размещаются рядом с полем ввода или <label> в зависимости от значения label.
*/
