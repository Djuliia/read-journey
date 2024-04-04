import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
