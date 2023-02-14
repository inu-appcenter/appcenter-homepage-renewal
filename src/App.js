import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import FAQMainPage from "./page/FAQMainPage";
import FAQDetailPage from "./page/FAQDetailPage";
import JoinUsPage from "./page/JoinUsPage";
import {FAQDetailListContainer} from "./container/faq/FAQDetailListContainer";
import {routerPath} from "./resource/string/routerPath";
import MainPage from "./page/MainPage";
import OurTeamPage from "./page/OurTeamPage";

function App() {
    return (
        <Routes>
            <Route path={routerPath.base.url} element={<Navigate to={'home'}/>}/>
            <Route path={routerPath.base.url} element={<MainPage/>}>
                <Route path={routerPath.home.url} element={<HomePage/>}/>
                <Route path={routerPath.ourTeam.url} element={<OurTeamPage/>}/>
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
