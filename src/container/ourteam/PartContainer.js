import MemberList from "../../component/ourteam/MemberList";
import SpeechBubble from "../../component/ourteam/SpeechBubble";
import PartTitle from "../../component/ourteam/PartTitle";
import {useGetTeamListQuery} from "../../apis/dataApi";

export default function PartContainer({year= 2022, team= 'Android'}){
    const {data} = useGetTeamListQuery({year: year,team: team.toLowerCase()});

    return(
        <>
            <div>
                <PartTitle partName={team}/>
                <SpeechBubble partName={team}/>
                <MemberList data={data}/>
            </div>

        </>
    )
}
