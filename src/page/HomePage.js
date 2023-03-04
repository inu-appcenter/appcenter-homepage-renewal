import AboutUsContainer from "../container/home/AboutUsContainer";
import OurTeamContainer from "../container/home/OurTeamContainer";
import ProductContainer from "../container/home/ProductContainer";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {useEffect, useRef} from "react";

export default function HomePage() {
    const current = useSelector(state=>state.home.current);
    const scrollRef = useRef([]);

    useEffect(() =>{
        if(current === 'About Us'){
            scrollRef.current[0].scrollIntoView({behavior:'smooth'});
        }
        if(current === 'Our Team'){
            scrollRef.current[1].scrollIntoView({behavior:'smooth'});
        }
        if(current === 'Product'){
            scrollRef.current[2].scrollIntoView({behavior:'smooth'});
        }
    },[current]);

    return (
        <HomePageWrapper>
            <AboutUsContainer mref={el=>(scrollRef.current[0] = el)}/>
            <OurTeamContainer mref={el=>(scrollRef.current[1] = el)}/>
            <ProductContainer mref={el=>(scrollRef.current[2] = el)}/>
        </HomePageWrapper>
    );
}

const HomePageWrapper = styled.div`
  display: grid;
  row-gap: 8rem;
  grid-template-columns: 100%;
  padding: 0 2rem;
`;
