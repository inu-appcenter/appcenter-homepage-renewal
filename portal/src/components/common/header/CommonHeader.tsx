import Logo from '@components/common/header/Logo.tsx';
import Nav from '@components/common/header/Nav.tsx';
import { useLocation } from 'react-router-dom';
import { PATH } from '@constants/path.ts';

const CommonHeader = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between py-4 px-12 rounded-b-5xl sm:rounded-b-6xl md:rounded-b-7xl ${
        pathname !== PATH.HOME() ? 'bg-primary-700' : ''
      }`}
    >
      <Logo />
      <Nav />
    </div>
  );
};

export default CommonHeader;
