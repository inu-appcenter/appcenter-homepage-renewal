import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PATH } from '@constants/path.ts';
import RootPage from '@pages/RootPage.tsx';
import HomePage from '@pages/HomePage.tsx';
import TeamPage from '@pages/TeamPage.tsx';
import JoinPage from '@pages/JoinPage.tsx';
import FAQPage from '@pages/FAQPage.tsx';
import FAQDetailPage from '@pages/FAQDetailPage.tsx';
import teamPageLoader from '@router/loader/teamPageLoader.ts';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: PATH.ROOT,
      element: <RootPage />,
      children: [
        {
          index: true,
          path: PATH.HOME(),
          element: <HomePage />,
        },
        {
          path: PATH.TEAM(),
          element: <TeamPage />,
          loader: teamPageLoader,
        },
        {
          path: PATH.JOIN,
          element: <JoinPage />,
        },
        {
          path: PATH.FAQ,
          element: <FAQPage />,
        },
        {
          path: PATH.FAQ_DETAIL(),
          element: <FAQDetailPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
