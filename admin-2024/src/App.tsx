import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import { PATH } from './constants/path';
import ClubPage from './page/clubPage';
import GenerationPage from './page/generationPage';
import MainPage from './page/mainPage';
import MemberPage from './page/memberPage';
import PhotoPage from './page/photoPage';
import ProductPage from './page/productPage';
import QnAPage from './page/qnaPage';
import RolePage from './page/rolePage';
import SignInPage from './page/SignInPage';

function App() {
  return (
    <BrowserRouter>
      {location.pathname !== PATH.SIGN_IN && <Header />}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path={PATH.SIGN_IN} element={<SignInPage />} />
        <Route path={PATH.CLUB} element={<ClubPage />} />
        <Route path={PATH.MEMBER} element={<MemberPage />} />
        <Route path={PATH.GENGERATION} element={<GenerationPage />} />
        <Route path={PATH.ROLE} element={<RolePage />} />
        <Route path={PATH.PRODUCT} element={<ProductPage />} />
        <Route path={PATH.PHOTO} element={<PhotoPage />} />
        <Route path={PATH.QNA} element={<QnAPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
