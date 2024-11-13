import SignInLogo from '@/assets/Signin_logo.png';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  return (
    <header className='flex flex-row items-center justify-around'>
      <img src={SignInLogo} alt='Sign In Logo' className='h-auto w-10' />
      <LogoutIcon />
    </header>
  );
};
export default Header;
