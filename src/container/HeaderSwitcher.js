import Header from "../component/common/Header";
import MainHeader from "../component/home/MainHeader";
import {useLocation} from "react-router-dom";
import {fullPath} from "../resource/string/routerPath";

export default function HeaderSwitcher() {
    const location = useLocation();
    return (
        <>
            {
                location.pathname === fullPath.home
                    ? <MainHeader/>
                    : <Header/>
            }
        </>
    )
}