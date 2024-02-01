import {Outlet} from "react-router-dom";
import HomeHeader from "../components/common/header/HomeHeader.tsx";

const RootPage = () => {
    return(
        <>
            <HomeHeader/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default RootPage;
