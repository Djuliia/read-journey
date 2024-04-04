import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './MainLayout/MainLayout';
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Recommended = lazy(() => import('../pages/Recommended'));
const ErrorPage = lazy(() => import('../pages/Error'));

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Recommended />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
