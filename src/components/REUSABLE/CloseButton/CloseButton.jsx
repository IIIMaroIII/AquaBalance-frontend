import css from './closeButton.module.css';
import Button from '../Button/Button.jsx';
import cross from 'src/assets/temporarySVG/x-2.svg';
import clsx from 'clsx';

const CloseButton = ({ onClose, addButtonClass }) => {
  return (
    <Button onClick={onClose} addClass={clsx(css.closeBtn, addButtonClass)}>
      <img className={css.iconClose} src={cross} alt="" />
    </Button>
  );
};

export default CloseButton;
