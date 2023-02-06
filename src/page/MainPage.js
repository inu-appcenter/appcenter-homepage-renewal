import {Outlet} from "react-router-dom";
// import Header from "../component/common/Header";
import HeaderSwitcher from "../container/home/HeaderSwitcher";

export default function MainPage() {
    return (
        <>
            <div>
                <HeaderSwitcher/>
                {/*<Header/>*/}
            </div>
            <main>
                <Outlet/>
            </main>
            {/*<Outlet/>*/}
        </>
    );
}
