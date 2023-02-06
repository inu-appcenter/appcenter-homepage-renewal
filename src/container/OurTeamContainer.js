import styled from "styled-components";
import {PageTitle} from "../component/common/PageTitle";
import {faqString} from "../resource/string/faqString";
import OurTeam from "../component/aboutus/OurTeam";

export default function OurTeamContainer(){
    return(
        <>
            <OurTeamWrapper>
                <PageTitle
                    title="Our Team"
                    topMargin='0'
                    subTitle={faqString[0].description}
                />
                <OurTeam/>
            </OurTeamWrapper>
        </>
    );
}
const OurTeamWrapper = styled.div`
  width: 100%;
`;
