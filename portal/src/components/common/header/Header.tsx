import { useLocation } from 'react-router-dom';
import { PATH } from '@constants/path.ts';
import CommonHeader from '@components/common/header/CommonHeader.tsx';
import Slogan from '@components/home/Slogan.tsx';

const Header = () => {
  const { pathname } = useLocation();

  const containerClassName =
    pathname === PATH.HOME()
      ? 'h-svh bg-gradient-to-t from-primary-400 to-blue-700  shadow-primary'
      : '';

  return (
    <>
      <div className={containerClassName}>
        <CommonHeader />
        {pathname === PATH.HOME() && (
          <div className='flex w-full h-2/3 px-32  justify-center items-center'>
            <Slogan />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
