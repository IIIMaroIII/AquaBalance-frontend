// import css from './UserBar.module.css';
import UserBarPopover from './UserBarPopover/UserBarPopover.jsx';
// import Button from 'src/components/REUSABLE/Button/Button.jsx';

const UserBar = () => {
  return (
    <div className={''}>
      {/* <Button onClick={() => {}} addClass={css.user_bar_wrapper}></Button> */}
      <UserBarPopover onClose={() => {}} />
    </div>
  );
};

export default UserBar;
