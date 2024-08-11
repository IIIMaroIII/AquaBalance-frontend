import { useDispatch } from 'react-redux';
import css from './deleteWaterModal.module.css';
import { changeDeleteWaterModalOpen, changeModal } from 'src/redux/water/slice';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import toast from 'react-hot-toast';
import { deleteWater } from 'src/redux/water/operations.js';

const DeleteWaterModal = ({ children, ...otherProps }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(deleteWater())
      .unwrap()
      .then(() => {
        toast.success('You have successfully deleted your water volume!');
        dispatch(changeDeleteWaterModalOpen(false));
        dispatch(changeModal(false));
      });
  };
  return (
    <div className={css.deleteModal}>
      <div className={css.deleteModalwrapper}>
        <h2 className={css.title}>Delete</h2>
        <p className={css.text}>Do you really delete?</p>
        <div className={css.btnWrap}>
          <Button addClass={css.btn} onClick={handleSubmit} {...otherProps}>
            {children || 'Delete'}
          </Button>
          <Button
            addClass={css.cancelBtn}
            onClick={() => {
              dispatch(changeDeleteWaterModalOpen(false));
              dispatch(changeModal(false));
            }}
          >
            {children || 'Cancel'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteWaterModal;
