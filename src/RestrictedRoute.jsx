import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectUserIsLoggedIn } from 'src/redux/users/selectors';

const RestrictedRoute = ({ children, redirectTo = '/' }) => {
  const isUserLoggedIn = useSelector(selectUserIsLoggedIn);

  return <>{isUserLoggedIn ? <Navigate to={redirectTo} /> : children}</>;
};

export default RestrictedRoute;
