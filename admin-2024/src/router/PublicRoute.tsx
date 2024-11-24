import { isLogin } from '@/utils/isLogin';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return isLogin() ? <Navigate to='/' replace /> : <>{children}</>;
}
