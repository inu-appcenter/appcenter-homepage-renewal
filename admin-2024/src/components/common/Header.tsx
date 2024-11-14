import SignInLogo from '@/assets/Signin_logo.png';
import { PATH } from '@/constants/path';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const logOut = () => {
    window.sessionStorage.removeItem('token');
    navigate(PATH.SIGN_IN);
  };
  return (
    <header className='mb-6 mt-6 flex flex-row items-center justify-between bg-white'>
      <Link to='/'>
        <img src={SignInLogo} alt='Sign In Logo' className='h-auto w-10' />
      </Link>
      <LogoutIcon
        fontSize='large'
        className='cursor-pointer'
        onClick={logOut}
      />
    </header>
  );
};
export default Header;
