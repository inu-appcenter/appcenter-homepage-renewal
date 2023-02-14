import MemberList from "../../component/ourteam/MemberList";
import SpeechBubble from "../../component/ourteam/SpeechBubble";
import PartTitle from "../../component/ourteam/PartTitle";
import {partInfo} from "../../resource/string/partInfo";
import {PartChip} from "../../component/PartChip";
import {PageTitle} from "../../component/common/PageTitle";

export default function PartContainer(){
    return(
        <>
            <PageTitle
                title="Our Team"
                bottomMargin='36px'
            />
            <PartChip/>
            {
                partInfo.slice(1).map((part)=>(
                    <>
                        <PartTitle partName={part.partName}/>
                        <SpeechBubble partName={part.partName}/>
                        <MemberList part={part.partName}/>
                    </>
                ))
            }
        </>
    )
}
