import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import FAQMainPage from "./page/FAQMainPage";
import FAQDetailPage from "./page/FAQDetailPage";
import JoinUsPage from "./page/JoinUsPage";
import {FAQDetailListContainer} from "./container/faq/FAQDetailListContainer";
import {fullPath, routerPath} from "./resource/string/routerPath";
import MainPage from "./page/MainPage";
import OurTeamPage from "./page/OurTeamPage";
import PartContainer from "./container/ourteam/PartContainer";

function App() {
    return (
        <Routes>
            <Route path={routerPath.base.url} element={<Navigate to={'home'}/>}/>
            <Route path='/' element={<Navigate to={fullPath.home}/>}/>
            <Route path={routerPath.base.url} element={<MainPage/>}>
                <Route path={routerPath.home.url} element={<HomePage/>}/>
                <Route path={routerPath.ourTeam.url} element={<Navigate to={'android'}/>}/>
                <Route path={routerPath.ourTeam.url} element={<OurTeamPage/>}>
                    <Route path=':part' element={<PartContainer/>}/>
                </Route>
                <Route path={routerPath.join.url} element={<JoinUsPage/>}/>
                <Route path={routerPath.faq.url} element={<FAQMainPage/>}/>
                <Route path={routerPath.faqDetail.url} element={<FAQDetailPage/>}>
                    <Route path=':part' element={<FAQDetailListContainer/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
