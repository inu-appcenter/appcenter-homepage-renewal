import { Outlet } from 'react-router-dom';
import Header from '../components/common/header/Header.tsx';

const RootPage = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
