import ArchiveItem from "./ArchiveItem";
import styled from "styled-components";

const archiveList = [
    {key:0,chipText:'방학',pointText:'1월',lineText:'팀별 프로젝트',listItem:''},
    {key:1,chipText:'학기중',pointText:'3월',lineText:'학기 중 팀 별 스터디',listItem:'상반기 모집'},
    {key:2,chipText:'방학',pointText:'6월',lineText:'팀별 프로젝트',listItem:'워크샵'},
    {key:3,chipText:'학기중',pointText:'9월',lineText:'학기 중 팀 별 스터디',listItem:'하반기 모집',last:true},
]

export default function Archive(){
    return(
        <FlexBox>
            {
                archiveList.map((item)=>(
                    <ArchiveItem
                        key={item.key}
                        chipText={item.chipText}
                        pointText={item.pointText}
                        lineText={item.lineText}
                        listItem={item.listItem}
                        last={item.last}
                    />
                ))
            }

        </FlexBox>
    );
}

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px){
    display:none;
  }
`
