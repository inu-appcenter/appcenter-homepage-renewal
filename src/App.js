import {Navigate, Route, Routes} from "react-router-dom";
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
            <Route path='/' element={<Navigate to={'home'}/>}/>
            <Route path='/' element={<MainPage/>}>
                <Route path={routerPath.home.url} element={<HomePage/>}/>
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
