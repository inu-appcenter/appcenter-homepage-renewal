import styled from "styled-components";
import {viewHeightCalc, viewWidthCalc} from "../../lib/viewportCalculate";
import chipBackground from '../../resource/img/archive_chip.svg';

const ArchiveItem = ({chipText='방학',
                         pointText = '1월',
                         lineText='팀별 프로젝트',
                         listItem=null,
    last=false
}) =>{
    return(
        <ItemWrapper>
            <CenterBox>
                <Point content={pointText}/>
                <Hr beforeContent={chipText} content={lineText}/>
                {
                    last &&
                    <Point content={'12월'}/>
                }
            </CenterBox>
            {listItem &&
                <ListBox>
                    <li>{listItem}</li>
                </ListBox>
            }

        </ItemWrapper>
    )
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListBox = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 54px;
  -webkit-padding-start: 1rem;
`

const Point = styled.div`
  background-color: ${props => props.theme.color.primary};
  width: 32px;
  height: 32px;
  border-radius: 999px;

  &::after {
    content:"${props=>props.content}";
    display: flex;
    justify-content: flex-start;
    position: relative;
    top: ${viewHeightCalc(50)};
    color:${props=>props.theme.color.primary};
    font-size: ${props=>props.theme.fontSize.default.plainText};
    width: 4rem;
  }
`

const Hr = styled.div`
  background-color: ${props=>props.theme.color.primary};
  height: 2px;
  //flex-grow:1;
  width: ${viewWidthCalc(260)};
  
  &::before{
    content:"${props=>props.beforeContent}";
    border-radius: 34.5px;
    background-image:url(${chipBackground}) ;
    background-position:center;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 4px;
    color: ${props => props.theme.color.yellow};
    font-size: 18px;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: ${viewHeightCalc(60)};
  }
  
  &::after {
    content:"${props=>props.content}";
    display: flex;
    justify-content: center;
    position: relative;
    top: ${viewHeightCalc(0)};
    color:${props=>props.theme.color.primary};
  }
`

export default ArchiveItem;
