import Header from '@components/common/header/Header.tsx';
import { Outlet } from 'react-router-dom';

const RootPage = () => {
  return (
    <div className='scroll-smooth h-svh overflow-y-scroll'>
      <Header />
      <main className='max-w-screen-xl mx-auto'>
        <Outlet />
      </main>
    </div>
  );
};

export default RootPage;
