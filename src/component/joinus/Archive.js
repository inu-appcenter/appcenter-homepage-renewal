import ArchiveItem from './ArchiveItem';
import styled from 'styled-components';
import { archiveList } from '../../resource/string/archiveList';

export default function Archive() {
    return (
        <FlexBox>
            {archiveList.map((item) => (
                <ArchiveItem
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
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        display: none;
    }
`;
