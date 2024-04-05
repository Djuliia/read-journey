import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './MainLayout/MainLayout';
import { lazy } from 'react';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/auth/selectors';
const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Recommended = lazy(() => import('../pages/Recommended'));
const Library = lazy(() => import('../pages/Library'));
const ErrorPage = lazy(() => import('../pages/Error'));

export const App = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="recommended" element={<Recommended />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="library" element={<Library />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
    // <Routes>
    //   {isLoggedIn ? (
    //     <Route path="/" element={<MainLayout />}>
    //       <Route index element={<Recommended />} />
    //       <Route path="*" element={<ErrorPage />} />
    //     </Route>
    //   ) : (
    //     <>
    //   <Route path="/" element={<Register />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/" element={<MainLayout />}>
    //     <Route path="/recommended" element={<Recommended />} />
    //   </Route>
    // </Routes>
  );
};
