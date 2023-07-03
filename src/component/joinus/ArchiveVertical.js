import styled from 'styled-components';
import ArchiveItemVertical from './ArchiveItemVertical';
import { archiveList } from '../../resource/string/archiveList';

export default function ArchiveVertical() {
    return (
        <FlexBox>
            {archiveList.map((item) => (
                <ArchiveItemVertical
                    key={item.key}
                    chipText={item.chipText}
                    chipColor={item.chipColor}
                    pointText={item.pointText}
                    lineText={item.lineText}
                    listItem={item.listItem}
                    last={item.last}
                />
            ))}
        </FlexBox>
    );
}

const FlexBox = styled.div`
    display: none;
    width: 50vw;
    flex-direction: column;
    @media (max-width: 768px) {
        display: flex;
    }
`;
