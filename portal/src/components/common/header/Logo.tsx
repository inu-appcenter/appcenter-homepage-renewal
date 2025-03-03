import LogoDefault from '@assets/svg/navbar_logo.svg';
import LogoSmall from '@assets/svg/navbar_logo_small.svg';
import LogoMedium from '@assets/svg/navbar_logo_medium.svg';
import { PATH } from "src/constants/path.ts"
import {useNavigate} from "react-router-dom";


const Logo = () => {
    const navigate = useNavigate();
    const handleClickLogo = ()=>{
        navigate(PATH.ROOT);
    }
  return (
    <div onClick={handleClickLogo}>
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
