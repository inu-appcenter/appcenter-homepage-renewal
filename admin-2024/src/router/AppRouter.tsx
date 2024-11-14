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
          element: <ClubPage />,
        },
        {
          path: PATH.MEMBER,
          element: <MemberPage />,
        },
        {
          path: PATH.GENGERATION,
          element: <GenerationPage />,
        },
        {
          path: PATH.ROLE,
          element: <RolePage />,
        },
        {
          path: PATH.PRODUCT,
          element: <ProductPage />,
        },
        {
          path: PATH.PHOTO,
          element: <PhotoPage />,
        },
        {
          path: PATH.QNA,
          element: <QnAPage />,
        },
      ],
    },
    {
      path: PATH.SIGN_IN,
      element: <SignInPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
