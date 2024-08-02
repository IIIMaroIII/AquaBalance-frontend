import { Suspense } from 'react';
import Loader from '../REUSABLE/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { TOAST } from '../Constants/constants.js';
import MainModal from '../Modals/MainModal.jsx';

const SharedLayout = ({ children }) => {
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
      <MainModal />
    </>
  );
};

export default SharedLayout;
