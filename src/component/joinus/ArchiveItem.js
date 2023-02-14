import styled from "styled-components";

const ArchiveItem = () =>{
    return(
        <PointWrapper alignItem='center'>
            <Point/>
            <PointName className="title">1월</PointName>
            <PointWrapper alignItem='flex-start'>
                <p>• 앱센터 워크샵</p>
            </PointWrapper>
        </PointWrapper>
    )
}

const PointWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.alignItem};
`

const Point = styled.div`
  background-color: ${props => props.theme.color.primary};
  width: 32px;
  height: 32px;
  border-radius: 999px;
`

const PointName = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${props=>props.theme.color.primary};
  margin-top: 20px;
`

export default ArchiveItem;
