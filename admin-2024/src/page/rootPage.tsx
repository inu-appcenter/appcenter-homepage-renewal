import Header from '@/components/common/Header';
import { Outlet } from 'react-router-dom';
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
