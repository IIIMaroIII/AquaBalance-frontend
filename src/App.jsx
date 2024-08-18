import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';

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
import { changeTheme } from './redux/darkTheme/slice';
import { selectDarkTheme } from './redux/darkTheme/selectors';

function App() {
  const dispatch = useDispatch();
  const switchTheme = useSelector(changeTheme);
  const theme = useSelector(selectDarkTheme);

  const toggle = () => {
    dispatch(switchTheme);
  };

  useEffect(() => {
    theme
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [theme]);

  return (
    <>
      <SharedLayout>
        <button onClick={toggle}>
          {!theme ? <MdDarkMode /> : <MdOutlineLightMode />}
        </button>

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
