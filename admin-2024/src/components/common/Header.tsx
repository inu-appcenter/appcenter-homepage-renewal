import SignInLogo from '@/assets/Signin_logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='mb-6 mt-6 flex flex-row items-center justify-between bg-white'>
      <Link to='/'>
        <img src={SignInLogo} alt='Sign In Logo' className='h-auto w-10' />
      </Link>
      <LogoutIcon fontSize='large' />
    </header>
  );
};
export default Header;
