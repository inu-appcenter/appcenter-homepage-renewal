import LogoDefault from '@assets/svg/navbar_logo.svg';
import LogoSmall from '@assets/svg/navbar_logo_small.svg';
import LogoMedium from '@assets/svg/navbar_logo_medium.svg';

const Logo = () => {
  return (
    <div>
      <img
        className='block sm:hidden w-[100px]'
        src={LogoMedium}
        alt='앱센터 로고'
      />
      <img
        className='hidden sm:block md:hidden w-[120px]'
        src={LogoSmall}
        alt='앱센터 로고'
      />
      <img
        className='hidden md:block w-[400px]'
        src={LogoDefault}
        alt='앱센터 로고'
      />
    </div>
  );
};

export default Logo;
