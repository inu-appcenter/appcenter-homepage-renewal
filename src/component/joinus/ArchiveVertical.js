import styled from "styled-components";
import ArchiveItemVertical from "./ArchiveItemVertical";
import theme from "../../resource/style/Theme";

const archiveList = [
    {key:0,chipText:'방학',chipColor:theme.color.cyan[0],pointText:'1월',lineText:'팀별 프로젝트',listItem:''},
    {key:1,chipText:'학기중',chipColor:theme.color.cyan[1],pointText:'3월',lineText:'학기 중 팀 별 스터디',listItem:'상반기 모집'},
    {key:2,chipText:'방학',chipColor:theme.color.cyan[2],pointText:'6월',lineText:'팀별 프로젝트',listItem:'워크샵'},
    {key:3,chipText:'학기중',chipColor:theme.color.cyan[3],pointText:'9월',lineText:'학기 중 팀 별 스터디',listItem:'하반기 모집',last:true},
];

export default function ArchiveVertical() {
    return (
        <FlexBox>
            {archiveList.map(item =>
                <ArchiveItemVertical
                    key={item.key}
                    chipText={item.chipText}
                    chipColor={item.chipColor}
                    pointText={item.pointText}
                    lineText={item.lineText}
                    listItem={item.listItem}
                    last={item.last}
                />
            )}
        </FlexBox>
    );
}

const FlexBox = styled.div`
    display: none;
    flex-direction: column;
    justify-content: left;
    @media (max-width: 768px) {
        display: flex;
    }
`