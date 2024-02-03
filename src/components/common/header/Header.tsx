import { useLocation } from 'react-router-dom';
import { PATH } from '../../../constants/path.ts';
import CommonHeader from './CommonHeader.tsx';

const Header = () => {
  const { pathname } = useLocation();

  const containerClassName =
    pathname === PATH.HOME()
      ? 'h-[50svh] sm:h-[100svh] bg-primary-700 shadow-primary rounded-b-7xl sm:rounded-bl-[45vw]'
      : '';

  return (
    <>
      <div className={containerClassName}>
        <CommonHeader />
      </div>
    </>
  );
};

export default Header;
