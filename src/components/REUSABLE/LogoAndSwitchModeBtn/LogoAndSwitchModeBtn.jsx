import css from './LogoAndSwitchModeBtn.module.css';

import { MdOutlineLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode } from 'src/redux/darkMode/selectors';
import { setDarkMode } from 'src/redux/darkMode/slice';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import clsx from 'clsx';

const LogoAndSwitchModeBtn = ({ addClass = '' }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectDarkMode);

  const handleClick = () => {
    dispatch(setDarkMode());
  };
  return (
    <div className={clsx(css.logoWrapper, addClass)}>
      <Logo />
      <Button onClick={handleClick} className="switch-dark-mode-btn">
        {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
      </Button>
    </div>
  );
};

export default LogoAndSwitchModeBtn;
