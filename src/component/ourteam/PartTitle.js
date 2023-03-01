import styled from "styled-components";
import {viewHeightCalc} from "../../lib/viewportCalculate";
import {Fab} from "@mui/material";
import {partInfo, partInfoByName} from "../../resource/string/partInfo";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function PartTitle({partName = 'Android'}) {
    return (
        <>
            <TextWrapper>
                <div className='TeamName'>{partInfoByName[partName].partName}</div>
                <div className='TeamDescription'>{partInfoByName[partName].description}</div>
            </TextWrapper>
        </>
    )
}


const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;

  .TeamName::first-letter {
    color: ${props => props.theme.color.primary};
  }

  .TeamName {
    margin-right: 40px;

    font-size: ${props => props.theme.fontSize.bigDesktop.subtitle};
    @media (max-width: 1800px) {
      font-size: ${props => props.theme.fontSize.desktop.subtitle};
    }
    @media (max-width: 1200px) {
      font-size: ${props => props.theme.fontSize.tablet.subtitle};
    }
    @media (max-width: 768px) {
      font-size: ${props => props.theme.fontSize.smallTablet.subtitle};
    }
    @media (max-width: 576px) {
      font-size: ${props => props.theme.fontSize.mobile.subtitle};
    }
  }

  .TeamDescription {
    font-size: 30px;
    color: ${props => props.theme.color.gray};

    font-size: ${props => props.theme.fontSize.bigDesktop.text};
    @media (max-width: 1800px) {
      font-size: ${props => props.theme.fontSize.desktop.text};
    }
    @media (max-width: 1200px) {
      font-size: ${props => props.theme.fontSize.tablet.text};
    }
    @media (max-width: 768px) {
      font-size: ${props => props.theme.fontSize.smallTablet.text};
    }
    @media (max-width: 576px) {
      font-size: ${props => props.theme.fontSize.mobile.text};
    }
  }
`
