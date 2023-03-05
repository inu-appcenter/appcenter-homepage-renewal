import {PageTitle} from "../component/common/PageTitle";
import {PartChip} from "../component/common/PartChip";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import YearDropBox from "../component/ourteam/YearDropBox";
import styled from "styled-components";
import {useEffect, useState} from "react";
import dayjs from "dayjs";
import qs from "qs";

export default function OurTeamPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const [part, setPart] = useState(location.pathname.split('/').at(-1)||localStorage.getItem('part') || 'android')
    const [year, setYear] = useState(localStorage.getItem('year') || dayjs().get('year')||2022);

    useEffect(()=>{
        setPart(location.pathname.split('/').at(-1));
        setYear(query.year||localStorage.getItem('year')||dayjs().get('year'));
    },[location]);

    useEffect(()=>{
        localStorage.setItem('part',part);
        localStorage.setItem('year',year);
        navigate({pathname:part, search:`?year=${year}`});
    },[part, year]);

    return (
        <OurTeamPageWrapper>
            <TitleWrapper>
                <Stack>
                    <PageTitle
                        title="Our Team"
                    />
                    <YearDropBox
                        year={year}
                        handleYearChange={(year)=> setYear(year)}
                    />
                </Stack>
                <PartChip
                    web={(year === '2022')}
                    common={false}
                    url={location.pathname}
                    onButtonClick={(e, part) => setPart(part)}
                />
            </TitleWrapper>
            <Outlet/>
        </OurTeamPageWrapper>
    )
}

const OurTeamPageWrapper = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 2rem;
  @media (max-width: 350px){
    padding: 0 1rem;
  }
`

const TitleWrapper = styled.div`
  display: grid;
  padding-top: ${props=>props.theme.padding.bigDesktop.contentTop};
  @media(max-width: 1800px) {
    padding-top: ${props=>props.theme.padding.desktop.contentTop};
    grid-template-columns: 1fr;
  }
  @media(max-width: 1600px) {
    grid-template-columns: 1fr 1.3fr;
  }
  @media(max-width: 1200px) {
    padding-top: ${props=>props.theme.padding.tablet.contentTop};
    grid-template-columns: 1fr 1.3fr;
  }
  @media(max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  @media(max-width: 768px) {
    padding-top: ${props=>props.theme.padding.smallTablet.contentTop};
  }
  @media(max-width: 576px) {
    padding-top: ${props=>props.theme.padding.mobile.contentTop};
  }
`;

const Stack = styled.div`
  display: flex;
  gap:1rem;
  align-items: center;
  align-content: space-between;
  @media(max-width: 768px) {
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  @media(max-width: 576px) {
    margin-bottom: 1rem;
  }
`;
