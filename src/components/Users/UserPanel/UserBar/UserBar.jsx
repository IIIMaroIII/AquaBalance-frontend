import css from './UserBar.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/users/selectors';
import UserBarPopover from './UserBarPopover/UserBarPopover.jsx';
import { useRef } from 'react';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import { useClickAway } from 'react-use';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

const UserBar = () => {
  const user = useSelector(selectUser);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const itemRef = useRef(null);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  useClickAway(itemRef, () => {
    setIsPopoverOpen(false);
  });

  return (
    <div className={css.userBarContainer} ref={itemRef}>
      <Button
        ariaHidden
        onClick={togglePopover}
        addClass={css.user_bar_wrapper}
      >
        {user?.name !== null ? (
          <span className={css.span}>{user.name}</span>
        ) : (
          <span className={css.span}>User</span>
        )}
        <div>
          <img
            className={css.user_avatar}
            alt="User Avatar"
            src={
              user?.photoUrl ??
              'https://img.icons8.com/?size=100&id=8VXh2TzKXNG8&format=png&color=000000'
            }
          />
        </div>
        {isPopoverOpen ? (
          <FaAngleUp className={css.arrowIcon} />
        ) : (
          <FaAngleDown className={css.arrowIcon} />
        )}
      </Button>
      {isPopoverOpen && <UserBarPopover onClose={togglePopover} />}
    </div>
  );
};

export default UserBar;
