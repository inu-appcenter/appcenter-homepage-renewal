import AboutUsContainer from "../container/home/AboutUsContainer";
import OurTeamContainer from "../container/home/OurTeamContainer";
import ProductContainer from "../container/home/ProductContainer";
import styled from "styled-components";

export default function HomePage() {
    return (
        <HomePageWrapper>
            <AboutUsContainer/>
            <OurTeamContainer/>
            <ProductContainer/>
        </HomePageWrapper>
    );
}

const HomePageWrapper = styled.div`
  display: grid;
  row-gap: 8rem;
  grid-template-columns: 100%;
  padding: 0 2rem;
`;
