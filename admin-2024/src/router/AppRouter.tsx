import { PATH } from '@/constants/path';
import ClubPage from '@/page/clubPage';
import GenerationPage from '@/page/generationPage';
import MainPage from '@/page/mainPage';
import MemberPage from '@/page/memberPage';
import PhotoPage from '@/page/photoPage';
import ProductPage from '@/page/productPage';
import QnAPage from '@/page/qnaPage';
import RolePage from '@/page/rolePage';
import RootPage from '@/page/rootPage';
import SignInPage from '@/page/SignInPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: PATH.ROOT,
      element: <RootPage />,
      children: [
        {
          index: true,
          path: PATH.ROOT,
          element: <MainPage />,
        },
        {
          path: PATH.CLUB,
          element: (
            <PrivateRoute>
              <ClubPage />
            </PrivateRoute>
          ),
        },
        {
          path: PATH.MEMBER,
          element: (
            <PrivateRoute>
              <MemberPage />
            </PrivateRoute>
          ),
        },
        {
          path: PATH.GENGERATION,
          element: (
            <PrivateRoute>
              <GenerationPage />
            </PrivateRoute>
          ),
        },
        {
          path: PATH.ROLE,
          element: (
            <PrivateRoute>
              <RolePage />
            </PrivateRoute>
          ),
        },
        {
          path: PATH.PRODUCT,
          element: (
            <PrivateRoute>
              <ProductPage />
            </PrivateRoute>
          ),
        },
        {
          path: PATH.PHOTO,
          element: (
            <PrivateRoute>
              <PhotoPage />
            </PrivateRoute>
          ),
        },
        {
          path: PATH.QNA,
          element: (
            <PrivateRoute>
              <QnAPage />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: PATH.SIGN_IN,
      element: (
        <PublicRoute>
          <SignInPage />
        </PublicRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
