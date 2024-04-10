import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MainLayout } from './MainLayout/MainLayout';
import { lazy, useEffect } from 'react';
import { useAuth } from 'hooks';
import { refreshUser } from '../redux/auth/operations';
import { Loader } from './Loader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Recommended = lazy(() => import('../pages/Recommended'));
const Library = lazy(() => import('../pages/Library'));
const Reading = lazy(() => import('../pages/Reading'));
const ErrorPage = lazy(() => import('../pages/Error'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/recommended"
              component={<Register />}
            />
          }
        />

        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/recommended" component={<Login />} />
          }
        />
        <Route
          path="recommended"
          element={<PrivateRoute redirectTo="/" component={<Recommended />} />}
        />
        <Route
          path="library"
          element={<PrivateRoute redirectTo="/" component={<Library />} />}
        />
        <Route
          path="reading"
          element={<PrivateRoute redirectTo="/" component={<Reading />} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
