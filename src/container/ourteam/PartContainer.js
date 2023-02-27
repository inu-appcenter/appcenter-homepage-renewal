import MemberList from "../../component/ourteam/MemberList";
import SpeechBubble from "../../component/ourteam/SpeechBubble";
import PartTitle from "../../component/ourteam/PartTitle";
import {useGetTeamListQuery} from "../../apis/dataApi";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export default function PartContainer(){
    const location = useLocation();
    console.log(location);
    const [part, setPart] = useState(location.pathname.split('/').at(-1))
    const {data} = useGetTeamListQuery({year: 2022,team: part});

    useEffect(()=>{
        setPart(location.pathname.split('/').at(-1));
    },[location.pathname])

    return(
        <>
            <div>
                <PartTitle partName={part}/>
                <SpeechBubble partName={part}/>
                <MemberList data={data}/>
            </div>
        </>
    )
}
