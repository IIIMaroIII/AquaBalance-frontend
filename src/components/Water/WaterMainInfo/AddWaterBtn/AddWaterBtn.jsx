import Button from 'src/components/REUSABLE/Button/Button';
import css from './AddWaterBtn.module.css';
import { FaPlus } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { changeModal, changeWaterModalAdd } from 'src/redux/water/slice';

const AddWaterBtn = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        addClass={css.btn}
        onClick={() => {
          dispatch(changeWaterModalAdd(true));
          dispatch(changeModal(true));
        }}
      >
        <FaPlus className={css.plusIcon} />
        <span className={css.btnSpan}>Add water</span>
      </Button>
    </>
  );
};

export default AddWaterBtn;
