import Logo from './Logo.tsx';
import Nav from './Nav.tsx';

const CommonHeader = () => {
  return (
    <div className='flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between py-4 px-12 rounded-b-5xl sm:rounded-b-6xl md:rounded-b-7xl bg-primary-700 shadow-primary'>
      <Logo />
      <Nav />
    </div>
  );
};

export default CommonHeader;
