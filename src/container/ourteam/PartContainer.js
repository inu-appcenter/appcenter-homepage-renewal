import MemberList from '../../component/ourteam/MemberList';
import SpeechBubble from '../../component/common/SpeechBubble';
import PartTitle from '../../component/ourteam/PartTitle';
import { useGetTeamListQuery } from '../../apis/dataApi';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function PartContainer() {
    const part = useSelector((state) => state.ourTeam.part);
    const year = useSelector((state) => state.ourTeam.year);
    const { data } = useGetTeamListQuery({ year: year, team: part });

    return (
        <>
            <PartAreaWrapper>
                <PartTitle partName={part} />
                <SpeechBubble partName={part} />
                <MemberList data={data} />
            </PartAreaWrapper>
        </>
    );
}

const PartAreaWrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    row-gap: ${(props) => props.theme.gap.bigDesktop.rowGap};
    @media (max-width: 1800px) {
        row-gap: ${(props) => props.theme.gap.desktop.rowGap};
    }
    @media (max-width: 1200px) {
        row-gap: ${(props) => props.theme.gap.tablet.rowGap};
    }
    @media (max-width: 768px) {
        row-gap: ${(props) => props.theme.gap.smallTablet.rowGap};
    }
    @media (max-width: 576px) {
        row-gap: ${(props) => props.theme.gap.mobile.rowGap};
    }
`;
