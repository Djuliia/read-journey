import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MainContainer } from './MainLayout.styled';

export const MainLayout = () => {
  const location = useLocation();
  const authLocation =
    location.pathname === '/register' || location.pathname === '/login';
  return (
    <MainContainer>
      {!authLocation && <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </MainContainer>
  );
};
