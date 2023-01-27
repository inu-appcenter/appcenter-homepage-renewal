import {Link, Outlet} from "react-router-dom";
import Header from "../component/common/Header";
import HeaderSwitcher from "../container/HeaderSwitcher";

export default function MainPage() {
    return (
        <>
            <nav>
                <HeaderSwitcher/>
                {/*<Header/>*/}
            </nav>
            <main>
                <Outlet/>
            </main>
            {/*<Outlet/>*/}
        </>
    );
}
