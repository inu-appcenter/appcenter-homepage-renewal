import { PATH } from '@/constants/path';
import { isLogin } from '@/utils/isLogin';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  return isLogin() ? <>{children}</> : <Navigate to={PATH.SIGN_IN} replace />;
};

export default PrivateRoute;
