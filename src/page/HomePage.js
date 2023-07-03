import AboutUsContainer from '../container/home/AboutUsContainer';
import OurTeamContainer from '../container/home/OurTeamContainer';
import ProductContainer from '../container/home/ProductContainer';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { setCurrent } from '../modules/homeSlice';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
    const current = useSelector((state) => state.home.current);
    const dispatch = useDispatch();
    const location = useLocation();
    const scrollRef = useRef([]);

    useEffect(() => {
        dispatch(setCurrent(location.state?.title));
    }, [dispatch, location.state?.title]);

    useEffect(() => {
        switch (current) {
            case 'Home':
                window.scrollTo(0, 0);
                break;
            case 'About Us':
                scrollRef.current[0].scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Our Team':
                scrollRef.current[1].scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Product':
                scrollRef.current[2].scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
        return () => dispatch(setCurrent(null));
    }, [current, dispatch]);

    return (
        <HomePageWrapper>
            <AboutUsContainer mref={(el) => (scrollRef.current[0] = el)} />
            <OurTeamContainer mref={(el) => (scrollRef.current[1] = el)} />
            <ProductContainer mref={(el) => (scrollRef.current[2] = el)} />
        </HomePageWrapper>
    );
}

const HomePageWrapper = styled.div`
    display: grid;
    row-gap: 8rem;
    grid-template-columns: 100%;
    padding: 0 2rem;
    @media (max-width: 350px) {
        padding: 0 1rem;
    }
`;
