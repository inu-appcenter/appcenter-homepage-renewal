import styled from 'styled-components';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { PartChip } from '../component/common/PartChip';
import { useDispatch, useSelector } from 'react-redux';
import { setPart } from '../modules/faqSlice';
import { useEffect } from 'react';

export default function FAQDetailPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const part = useSelector((state) => state.faq.part);

    useEffect(() => {
        dispatch(setPart(location?.pathname?.split('/').at(-1)));
    }, [dispatch, location]);

    useEffect(() => {
        navigate(part);
    }, [navigate, part]);

    return (
        <>
            <FAQDetailWrapper>
                <ContentWrapper>
                    <PartChip
                        activePart={part}
                        onButtonClick={(e, part) => dispatch(setPart(part))}
                        common={true}
                        web={false}
                    />
                    <Outlet />
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
`;

const ContentWrapper = styled.div`
    padding-top: ${(props) => props.theme.padding.bigDesktop.contentTop};
`;
