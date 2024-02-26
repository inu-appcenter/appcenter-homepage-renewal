import { PageTitle } from '../component/common/PageTitle';
import { PartChip } from '../component/common/PartChip';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import YearDropBox from '../component/ourteam/YearDropBox';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPart, setYear } from '../modules/ourTeamSlice';

export default function OurTeamPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const part = useSelector((state) => state.ourTeam.part);
    const year = useSelector((state) => state.ourTeam.year);

    useEffect(() => {
        if (location?.state?.part) {
            dispatch(setPart(location?.state?.part));
        }
    }, [dispatch, location]);

    useEffect(() => {
        if (part === 'web' && year !== 2022) {
            dispatch(setYear(2022));
        }
        navigate({ pathname: part, search: `?year=${year}` });
    }, [dispatch, navigate, part, year]);

    return (
        <OurTeamPageWrapper>
            <TitleWrapper>
                <Stack>
                    <PageTitle title='Our Team' />
                    <YearDropBox
                        year={year}
                        handleYearChange={(year) => dispatch(setYear(year))}
                    />
                </Stack>
                <PartChip
                    activePart={part}
                    web={year === 2022}
                    common={false}
                    onButtonClick={(e, part) => dispatch(setPart(part))}
                />
            </TitleWrapper>
            <Outlet />
        </OurTeamPageWrapper>
    );
}

const OurTeamPageWrapper = styled.div`
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 100%;
    row-gap: 2rem;
    @media (max-width: 350px) {
        padding: 0 1rem;
    }
`;

const TitleWrapper = styled.div`
    display: grid;  
    padding-top: ${(props) => props.theme.padding.bigDesktop.contentTop};
    @media (max-width: 1800px) {
        padding-top: ${(props) => props.theme.padding.desktop.contentTop};
        grid-template-columns: 1fr;
    }
    @media (max-width: 1600px) {
        grid-template-columns: 1fr 1.3fr;
    }
    @media (max-width: 1200px) {
        padding-top: ${(props) => props.theme.padding.tablet.contentTop};
        grid-template-columns: 1fr 1.3fr;
    }
    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
    @media (max-width: 768px) {
        padding-top: ${(props) => props.theme.padding.smallTablet.contentTop};
    }
    @media (max-width: 576px) {
        padding-top: ${(props) => props.theme.padding.mobile.contentTop};
    }
`;

const Stack = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    align-content: space-between;
    @media (max-width: 768px) {
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    @media (max-width: 576px) {
        margin-bottom: 1rem;
    }
`;
