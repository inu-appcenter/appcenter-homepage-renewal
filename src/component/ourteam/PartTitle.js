import styled from "styled-components";
import {viewHeightCalc} from "../../lib/viewportCalculate";
import {Fab} from "@mui/material";
import {partInfo, partInfoByName} from "../../resource/string/partInfo";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function PartTitle({partName='Android'}){
    return(
        <>
            <TextWrapper>
                <div className='TeamName'>{partInfoByName[partName].partName}</div>
                <div className='TeamDescription'>{partInfoByName[partName].description}</div>
            </TextWrapper>
        </>
    )
}


const TextWrapper = styled.div`
  display:flex;
  align-items:center;
  font-weight: 600;
  margin-top: 40px;
  .TeamName::first-letter {
    color: ${props => props.theme.color.primary};
  }

  .TeamName {
    font-size: 50px;
    margin-right: 40px;
  }

  .TeamDescription {
    font-size: 30px;
    color: ${props => props.theme.color.gray};
  }
`
