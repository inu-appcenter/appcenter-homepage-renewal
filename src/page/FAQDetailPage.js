import styled from "styled-components";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {FAQCategoryChip} from "../component/FAQCategoryChip";

export default function FAQDetailPage() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <FAQDetailWrapper>
                <ContentWrapper>
                    <FAQCategoryChip
                        url={location.pathname}
                        onButtonClick={(e, part) => navigate(part)}
                    />
                    <Outlet/>
                </ContentWrapper>
            </FAQDetailWrapper>
        </>
    );
}

const FAQDetailWrapper = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 2rem;
`

const ContentWrapper = styled.div`
  padding-top: ${props=>props.theme.padding.bigDesktop.contentTop};

`

