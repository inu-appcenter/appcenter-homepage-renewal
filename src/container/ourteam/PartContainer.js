import MemberList from "../../component/ourteam/MemberList";
import SpeechBubble from "../../component/common/SpeechBubble";
import PartTitle from "../../component/ourteam/PartTitle";
import {useGetTeamListQuery} from "../../apis/dataApi";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import qs from "qs";
import styled from "styled-components";
import dayjs from "dayjs";

export default function PartContainer(){
    const location = useLocation();

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const [part, setPart] = useState(location.pathname.split('/').at(-1)||'android');
    const [year, setYear] = useState( dayjs().get('year')||2022);
    const {data} = useGetTeamListQuery({year: year,team: part});

    useEffect(()=>{
        if(part === 'web'){
            setYear(2022);
        }
    },[part]);

    useEffect(()=>{
        if(part === 'web' && year !== 2022){
            setPart('android');
        }
    },[part, year]);


    useEffect(()=>{
        setPart(location.pathname.split('/').at(-1));
        setYear(query.year||dayjs().get('year'));
    },[location, query.year]);


    return(
        <>
            <PartAreaWrapper>
                <PartTitle partName={part}/>
                <SpeechBubble partName={part}/>
                <MemberList
                    data={data}
                />
            </PartAreaWrapper>
        </>
    )
}

const PartAreaWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: ${props=>props.theme.gap.bigDesktop.rowGap};
  @media(max-width: 1800px) {
    row-gap: ${props=>props.theme.gap.desktop.rowGap};
  }
  @media(max-width: 1200px) {
    row-gap: ${props=>props.theme.gap.tablet.rowGap};
  }
  @media(max-width: 768px) {
    row-gap: ${props=>props.theme.gap.smallTablet.rowGap};
  }
  @media(max-width: 576px) {
    row-gap: ${props=>props.theme.gap.mobile.rowGap};
  }
`
