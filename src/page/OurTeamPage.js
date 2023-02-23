import PartContainer from "../container/ourteam/PartContainer";
import {PageTitle} from "../component/common/PageTitle";
import {PartChip} from "../component/PartChip";

export default function OurTeamPage(){
    return(
        <>
            <PageTitle
                title="Our Team"
                bottomMargin='36px'
            />
            <PartChip/>
            <PartContainer
                year="2022"
                team="Android"
            />
            <PartContainer
                year="2022"
                team="Design"
            />
            <PartContainer
                year="2022"
                team="iOS"
            />
            <PartContainer
                year="2022"
                team="Server"
            />
            <PartContainer
                year="2022"
                team="Web"
            />
        </>
    )
}
