import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import AdminPage from './page/AdminPage';
import ManagePage from './page/ManagePage';
import CenterPage from './page/CenterPage';
import FAQMainPage from './page/FAQMainPage';
import FAQDetailPage from './page/FAQDetailPage';
import JoinUsPage from './page/JoinUsPage';
import { FAQDetailListContainer } from './container/faq/FAQDetailListContainer';
import { routerPath } from './resource/string/routerPath';
import MainPage from './page/MainPage';
import OurTeamPage from './page/OurTeamPage';
import PartContainer from './container/ourteam/PartContainer';
import DetailPage from './page/DetailPage';
import ManageGenPage from './page/ManageGenPage';
import ManageRolePage from './page/ManageRolePage';
import ProductPage from './page/ProductPage';
import QnAPage from './page/QnAPage';
import LoginPage from './page/LoginPage';
import Modal from 'react-modal';

function App() {
    Modal.setAppElement('#root'); //App.js에 Modal을 사용하기 위한 설정
    return (
        <Routes>
            <Route path='/' element={<Navigate to={'home'} />} />
            <Route path='/' element={<MainPage />}>
                <Route path={routerPath.home.url} element={<HomePage />} />
                {/*<Route path={routerPath.ourTeam.url} element={<Navigate to={'android'}/>}/>*/}
                <Route path={routerPath.ourTeam.url} element={<OurTeamPage />}>
                    <Route path=':part' element={<PartContainer />} />
                </Route>
                <Route path={routerPath.join.url} element={<JoinUsPage />} />
                <Route path={routerPath.faq.url} element={<FAQMainPage />} />
                <Route
                    path={routerPath.faqDetail.url}
                    element={<FAQDetailPage />}
                >
                    <Route path=':part' element={<FAQDetailListContainer />} />
                </Route>
            </Route>
            <Route path={routerPath.dashboard.url} element={<AdminPage />} />
            <Route path={routerPath.center.url} element={<CenterPage />} />
            <Route path={routerPath.detail.url} element={<DetailPage />} />
            <Route path={routerPath.manage.url} element={<ManagePage />} />
            <Route path={routerPath.qna.url} element={<QnAPage />} />
            <Route
                path={routerPath.generation.url}
                element={<ManageGenPage />}
            />
            <Route path={routerPath.role.url} element={<ManageRolePage />} />
            <Route path={routerPath.product.url} element={<ProductPage />} />
            <Route path={routerPath.login.url} element={<LoginPage />} />
        </Routes>
    );
}

export default App;
