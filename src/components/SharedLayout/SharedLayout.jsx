import { Suspense } from 'react';
import Loader from '../REUSABLE/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { TOAST } from '../Constants/constants.js';
import MainModal from '../Modals/MainModal.jsx';
import useModals from 'src/hooks/useModals.js';

const SharedLayout = ({ children }) => {
  const { modal } = useModals();

  return (
    <>
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
    </>
  );
};

export default SharedLayout;
