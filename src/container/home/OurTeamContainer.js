import styled from "styled-components";
import {PageTitle} from "../../component/common/PageTitle";
import {partInfo} from "../../resource/string/partInfo";
import OurTeam from "../../component/home/OurTeam";

export default function OurTeamContainer({mref}){
    return(
        <OurTeamWrapper ref={mref}>
            <PageTitle
                title="Our Team"
                subTitle={partInfo[0].description}
            />
            <OurTeam/>
        </OurTeamWrapper>
    );
}
const OurTeamWrapper = styled.div`
  width: 100%;
  padding-bottom: 30px;
`;
