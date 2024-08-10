import clsx from 'clsx';
// import css from './container.module.css';

const Container = ({
  children,
  type = 'div',
  addClass = '',
  ...otherProps
}) => {
  const renderEl = type => {
    switch (type) {
      case 'div':
        return (
          <div className={clsx(addClass)} {...otherProps}>
            {children}
          </div>
        );
      case 'main':
        return (
          <main className={clsx(addClass)} {...otherProps}>
            {children}
          </main>
        );
      case 'section':
        return (
          <section className={clsx(addClass)} {...otherProps}>
            {children}
          </section>
        );

      default:
        return null;
    }
  };
  return renderEl(type);
};

export default Container;
