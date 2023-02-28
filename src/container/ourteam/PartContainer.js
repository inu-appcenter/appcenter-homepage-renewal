import MemberList from "../../component/ourteam/MemberList";
import SpeechBubble from "../../component/common/SpeechBubble";
import PartTitle from "../../component/ourteam/PartTitle";
import {useGetTeamListQuery} from "../../apis/dataApi";
import {useLocation} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import qs from "qs";
import styled from "styled-components";

export default function PartContainer(){
    const location = useLocation();
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const [part, setPart] = useState(location.pathname.split('/').at(-1))
    const {data} = useGetTeamListQuery({year: query.year,team: part});

    useEffect(()=>{
        setPart(location.pathname.split('/').at(-1));
    },[location.pathname]);

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
