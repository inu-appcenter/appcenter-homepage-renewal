// import Header from "../../component/common/Header";
import Navbar from '../../component/common/Navbar';
import { useLocation } from 'react-router-dom';
import { AbsolutePath } from '../../resource/string/routerPath';
import WelcomeContainer from './WelcomeContainer';
import styled from 'styled-components';

export default function HeaderSwitcher() {
    const location = useLocation();
    return (
        <>
            {location.pathname === AbsolutePath.home ? (
                <WelcomeContainer />
            ) : (
                <Spacer />
            )}
            <Navbar />
        </>
    );
}

const Spacer = styled.div`
    height: 8.25rem;
    @media (max-width: 576px) {
        height: 9rem;
    }
`;
