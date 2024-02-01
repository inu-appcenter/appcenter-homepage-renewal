import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootPage from "../pages/RootPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import {PATH} from "../constants/path.ts";
import TeamPage from "../pages/TeamPage.tsx";
import JoinPage from "../pages/JoinPage.tsx";
import FAQPage from "../pages/FAQPage.tsx";
import FAQDetailPage from "../pages/FAQDetailPage.tsx";

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: PATH.ROOT,
            element: <RootPage/>,
            children: [
                {
                    path: PATH.HOME,
                    element: <HomePage />,
                },
                {
                    path: PATH.TEAM(),
                    element: <TeamPage/>
                },
                {
                    path: PATH.JOIN,
                    element: <JoinPage/>
                },
                {
                    path: PATH.FAQ,
                    element: <FAQPage/>
                },
                {
                    path: PATH.FAQ_DETAIL(),
                    element: <FAQDetailPage/>
                }
            ],
        },
    ]);

    return(
       <RouterProvider router={router}/>
   )
}

export default AppRouter;
