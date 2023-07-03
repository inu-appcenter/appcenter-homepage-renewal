import { Outlet, useLocation } from 'react-router-dom';
import HeaderSwitcher from '../container/home/HeaderSwitcher';
import Footer from '../component/common/Footer';
import { useEffect } from 'react';

export default function MainPage() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname !== '/appcenter-homepage-renewal/home') {
            window.scrollTo(0, 0);
        }
    }, [pathname]);
    return (
        <>
            <div>
                <HeaderSwitcher />
            </div>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
