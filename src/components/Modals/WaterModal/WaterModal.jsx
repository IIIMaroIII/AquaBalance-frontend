import css from './waterModal.module.css';
import WaterForm from 'src/components/REUSABLE/WaterForm/WaterForm.jsx';
import useModals from 'src/hooks/useModals.js';

const WaterModal = ({ operationType }) => {
  const {} = useModals();

  const WaterFormType = () => {
    switch (operationType) {
      case 'edit':
        return (
          <div className={css.titleContainer}>
            <h2 className={css.title}>Edit the entered amount of water</h2>
            <h3 className={css.text}>Correct entered data:</h3>
          </div>
        );
      case 'add':
        return (
          <div className={css.titleContainer}>
            <h2 className={css.title}>Add water</h2>
            <h3 className={css.text}>Choose a value:</h3>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <h2>{WaterFormType()}</h2>
      <WaterForm operationName={operationType} />
    </>
  );
};

export default WaterModal;
