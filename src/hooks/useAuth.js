import { useSelector } from 'react-redux';
import {
  selectRefreshing,
  selectUserIsLoading,
  selectUserIsLoggedIn,
} from 'src/redux/users/selectors.js';
import { selectIsLoading } from 'src/redux/water/selectors.js';

const useAuth = () => {
  const isUserLoggedIn = useSelector(selectUserIsLoggedIn);
  const isUserRefreshing = useSelector(selectRefreshing);
  const isUserLoading = useSelector(selectUserIsLoading);
  const isWaterLoading = useSelector(selectIsLoading);

  return { isUserLoggedIn, isUserLoading, isUserRefreshing, isWaterLoading };
};

export default useAuth;
