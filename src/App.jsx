import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const SignInPage = lazy(() => import('./pages/SignIn/SignInPage.jsx'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage.jsx'));
const SignUpPage = lazy(() => import('./pages/SignUp/SignUpPage.jsx'));

import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';

import './App.css';
import ChartComponent from './components/ChartComponent/ChartComponent.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode } from './redux/darkMode/selectors';
import { setDarkMode } from './redux/darkMode/slice';

function App() {
  const isDarkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark_mode');
    } else {
      document.body.classList.remove('dark_mode');
    }
  }, [isDarkMode]);

  const handleClick = () => {
    dispatch(setDarkMode());
  };

  return (
    <>
      <SharedLayout>
        <button onClick={handleClick}>click</button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {
            <Route
              path="/tracker"
              element={
                <PrivateRoute redirectTo="/signin">
                  <TrackerPage />
                </PrivateRoute>
              }
            >
              <Route path="statistics" element={<ChartComponent />} />
            </Route>
          }
          {
            <Route
              path="/signup"
              element={
                <RestrictedRoute redirectTo="/signin">
                  <SignUpPage />
                </RestrictedRoute>
              }
            />
          }

          {
            <Route
              path="/signin"
              element={
                <RestrictedRoute redirectTo="/tracker">
                  <SignInPage />
                </RestrictedRoute>
              }
            />
          }

          {<Route path="/*" element={<HomePage />} />}
        </Routes>
      </SharedLayout>
    </>
  );
}
export default App;
