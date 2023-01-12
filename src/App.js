import {Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import SubPage from "./page/SubPage";
import FAQMainPage from "./page/FAQMainPage";
import FAQDetailPage from "./page/FAQDetailPage";
import JoinUsPage from "./page/JoinUsPage";

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/sub' element={<SubPage/>}>
                <Route path='join' element={<JoinUsPage/>}/>
                <Route path='faq' element={<FAQMainPage/>}/>
                <Route path='faq/detail' element={<FAQDetailPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
