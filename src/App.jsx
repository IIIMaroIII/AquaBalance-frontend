import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('./pages/SignIn/SignInPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));
const SignUpPage = lazy(() => import('./pages/SignUp/SignUpPage'));

// import PrivateRoute from './PrivateRoute';
// import RestrictedRoute from './RestrictedRoute';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';

import './App.css';

function App() {
  return (
    <>
      <SharedLayout>
        <Routes>
          {/* {
            <Route
            path="/tracker"
            element={
                <PrivateRoute redirectTo="/signup">
                <TrackerPage />
                </PrivateRoute>
              }
            />
          } */}
          {/* {
            <Route
              path="/signup"
              element={
                <RestrictedRoute redirectTo="/signin">
                  <SignUpPage />
                </RestrictedRoute>
              }
            />
          } */}

          {/* {
            <Route
              path="/signin"
              element={
                <RestrictedRoute redirectTo="/tracker">
                  <SignInPage />
                  </RestrictedRoute>
                  }
                  />
                  } */}

          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/tracker" element={<TrackerPage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </SharedLayout>
    </>
  );
}
export default App;
