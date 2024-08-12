import { Suspense } from 'react';
import Loader from '../REUSABLE/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { TOAST } from '../Constants/constants.js';
import MainModal from '../Modals/MainModal.jsx';
import useModals from 'src/hooks/useModals.js';
import css from './sharedLayout.module.css';
import useAuth from 'src/hooks/useAuth.js';

const SharedLayout = ({ children }) => {
  const { modal } = useModals();
  const { isUserLoading } = useAuth();

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
      {isUserLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <Suspense fallback={null}>{children}</Suspense>
      )}
      {modal ? <MainModal /> : <></>}
    </div>
  );
};

export default SharedLayout;
