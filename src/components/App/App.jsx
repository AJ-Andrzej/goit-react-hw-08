import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Layout from '../Layout/Layout';
import { refrshUser } from '../../redux/auth/authOps';
import { selectIsRefreshing } from '../../redux/auth/authSelectors';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

export default function App() {
  const dispath = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispath(refrshUser());
  }, [dispath]);
  if (isRefreshing) {
    return null;
  }
  return (
    <Layout>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactPage />} />}
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}
