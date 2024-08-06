import clsx from 'clsx';
// import css from './container.module.css';

const Container = ({
  children,
  type = 'div',
  addClass = '',
  ...otherProps
}) => {
  return (
    <>
      {type === 'div' ? (
        <div className={clsx(addClass)} {...otherProps}>
          {children}
        </div>
      ) : (
        <section className={clsx(addClass)} {...otherProps}>
          {children}
        </section>
      )}
    </>
  );
};

export default Container;
