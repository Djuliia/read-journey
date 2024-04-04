import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './MainLayout.styled';

export const MainLayout = () => {
  return (
    <MainContainer>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </MainContainer>
  );
};
