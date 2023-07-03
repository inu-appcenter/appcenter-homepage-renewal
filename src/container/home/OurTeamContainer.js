import styled from 'styled-components';
import { PageTitle } from '../../component/common/PageTitle';
import { partInfo } from '../../resource/string/partInfo';
import OurTeam from '../../component/home/OurTeam';

export default function OurTeamContainer({ mref }) {
    return (
        <OurTeamContainerLayout ref={mref}>
            <PageTitleBox>
                <PageTitle
                    title='Our Team'
                    subTitle={partInfo[0].description}
                />
            </PageTitleBox>
            <OurTeam />
        </OurTeamContainerLayout>
    );
}
const OurTeamContainerLayout = styled.div`
    width: 100%;
    padding-bottom: 30px;
`;

const PageTitleBox = styled.div`
    padding-top: 150px;
    @media (max-width: 1800px) {
        padding-top: 50px;
    }
`;
