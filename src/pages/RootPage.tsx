import { Outlet } from 'react-router-dom';
import Header from '../components/common/header/Header.tsx';

const RootPage = () => {
  return (
    <>
      <Header />
      <main className='max-w-screen-xl mx-auto'>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
