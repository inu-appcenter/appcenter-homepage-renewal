import {Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import FAQMainPage from "./page/FAQMainPage";
import FAQDetailPage from "./page/FAQDetailPage";
import JoinUsPage from "./page/JoinUsPage";
import {FAQDetailListContainer} from "./container/FAQDetailListContainer";
import {routerPath} from "./resource/string/routerPath";
import MainPage from "./page/MainPage";

function App() {
    return (
        <Routes>
            <Route path='' element={<MainPage/>}>
                <Route path={routerPath.home.url} element={<HomePage/>}/>
                <Route path={routerPath.join.url} element={<JoinUsPage/>}/>
                <Route path={routerPath.faq.url} element={<FAQMainPage/>}/>
                <Route path={routerPath.faqDetail.url} element={<FAQDetailPage/>}>
                    <Route path={routerPath.faqDetail.child.common.url} element={<FAQDetailListContainer/>}/>
                    <Route path={routerPath.faqDetail.child.android.url} element={<FAQDetailListContainer/>}/>
                    <Route path={routerPath.faqDetail.child.ios.url} element={<FAQDetailListContainer/>}/>
                    <Route path={routerPath.faqDetail.child.server.url} element={<FAQDetailListContainer/>}/>
                    <Route path={routerPath.faqDetail.child.web.url} element={<FAQDetailListContainer/>}/>
                    <Route path={routerPath.faqDetail.child.design.url} element={<FAQDetailListContainer/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
