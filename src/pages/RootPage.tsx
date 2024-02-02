import { Outlet } from 'react-router-dom';
import CommonHeader from '../components/common/header/CommonHeader.tsx';

const RootPage = () => {
  return (
    <>
      <CommonHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
