import { useSelector } from 'react-redux';
import {
  selectRefreshing,
  selectUserIsLoading,
  selectUserIsLoggedIn,
} from 'src/redux/users/selectors.js';

const useAuth = () => {
  const isUserLoggedIn = useSelector(selectUserIsLoggedIn);
  const isUserRefreshing = useSelector(selectRefreshing);
  const isUserLoading = useSelector(selectUserIsLoading);

  return { isUserLoggedIn, isUserLoading, isUserRefreshing };
};

export default useAuth;
