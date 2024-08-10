import { Suspense } from 'react';
import Loader from '../REUSABLE/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { TOAST } from '../Constants/constants.js';
import MainModal from '../Modals/MainModal.jsx';
import useModals from 'src/hooks/useModals.js';
import css from './sharedLayout.module.css';

const SharedLayout = ({ children }) => {
  const { modal } = useModals();

  return (
    <div className={css.wrapper}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={TOAST.options}
      />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      {modal ? <MainModal /> : <></>}
    </div>
  );
};

export default SharedLayout;
