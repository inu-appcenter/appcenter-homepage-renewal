import { PATH } from '@/constants/path';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import CustomDrawer from './Drawer';

const Header = () => {
  const navigate = useNavigate();
  const logOut = () => {
    window.sessionStorage.removeItem('token');
    navigate(PATH.SIGN_IN);
  };
  return (
    <header className='m-auto mb-6 mt-6 flex flex-row items-center justify-between bg-white md:w-[700px] lg:w-[800px]'>
      <CustomDrawer />
      <LogoutIcon
        fontSize='large'
        className='cursor-pointer'
        onClick={logOut}
      />
    </header>
  );
};
export default Header;
