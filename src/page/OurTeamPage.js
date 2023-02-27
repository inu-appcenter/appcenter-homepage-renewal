import {PageTitle} from "../component/common/PageTitle";
import {PartChip} from "../component/common/PartChip";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import YearDropBox from "../component/ourteam/YearDropBox";
import Stack from '@mui/material/Stack';
import styled from "styled-components";
import {useEffect, useState} from "react";
import qs from "qs";

export default function OurTeamPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const [part, setPart] = useState(location.pathname.split('/').at(-1))
    const [year, setYear] = useState(query.year);

    useEffect(()=>{
        navigate({pathname:part, search:`?year=${year}`});
    },[part, year])

    return (
        <OurTeamPageWrapper>
            <TitleAreaWrapper>
                <Stack direction={'row'} alignItems={'center'} spacing={2} >
                    <PageTitle
                        title="Our Team"
                    />
                    <YearDropBox
                        year={year}
                        handleYearChange={(year)=> setYear(year)}
                    />
                </Stack>
            </TitleAreaWrapper>
            <PartChip
                common={false}
                url={location.pathname}
                onButtonClick={(e, part) => setPart(part)}
            />
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
  padding-top: ${props=>props.theme.padding.bigDesktop.contentTop};
  @media(max-width: 1800px) {
    padding-top: ${props=>props.theme.padding.desktop.contentTop};
  }
  @media(max-width: 1200px) {
    padding-top: ${props=>props.theme.padding.tablet.contentTop};
  }
  @media(max-width: 768px) {
    padding-top: ${props=>props.theme.padding.smallTablet.contentTop};
  }
  @media(max-width: 576px) {
    padding-top: ${props=>props.theme.padding.mobile.contentTop};
  }
`;
