import css from './closeButton.module.css';
import Button from '../Button/Button.jsx';
import cross from 'src/assets/temporarySVG/x-2.svg';

const CloseButton = ({ onClose }) => {
  return (
    <Button onClick={onClose} addClass={css.closeBtn}>
      <img className={css.iconClose} src={cross} alt="" />
    </Button>
  );
};

export default CloseButton;
