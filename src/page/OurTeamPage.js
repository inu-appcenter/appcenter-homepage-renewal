import {PageTitle} from "../component/common/PageTitle";
import {PartChip} from "../component/common/PartChip";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import YearDropBox from "../component/ourteam/YearDropBox";
import styled from "styled-components";
import {useEffect, useState} from "react";
import qs from "qs";
import dayjs from "dayjs";

export default function OurTeamPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const [part, setPart] = useState(location.pathname.split('/').at(-1))
    const [year, setYear] = useState(query.year||dayjs().get('year'));

    useEffect(()=>{
        navigate({pathname:part, search:`?year=${year}`});
    },[part, year])

    return (
        <OurTeamPageWrapper>
            <TitleAreaWrapper>
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
                    common={false}
                    url={location.pathname}
                    onButtonClick={(e, part) => setPart(part)}
                />
            </TitleAreaWrapper>
            <Outlet/>
        </OurTeamPageWrapper>
    )
}

const OurTeamPageWrapper = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 2rem;
`

const TitleAreaWrapper = styled.div`
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
  gap:10px;
  align-items: center;
  align-content: space-between;
  @media(max-width: 768px) {
    justify-content: space-between;
  }
  @media(max-width: 576px) {
    margin-bottom: 1rem;
  }
`;
