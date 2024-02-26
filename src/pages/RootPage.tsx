import Header from '@components/common/header/Header.tsx';
import { Outlet } from 'react-router-dom';

const RootPage = () => {
  return (
    <>
      <Header />
      <main className='scroll-smooth h-svh overflow-scroll max-w-screen-xl mx-auto'>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
