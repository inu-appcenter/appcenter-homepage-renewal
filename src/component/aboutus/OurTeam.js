import styled from "styled-components";
import {partInfo} from "../../resource/string/partInfo";
import {viewHeightCalc} from "../../lib/viewportCalculate";
import {Fab} from "@mui/material"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {useNavigate} from "react-router-dom";

export default function OurTeam() {
    const navigate = useNavigate();
    return (
        <>
            <TeamListWrapper>
                {
                    partInfo.map((item) => (
                        <TeamListItem>
                            <TextWrapper>
                                <div className='TeamName'>{item.partName}</div>
                                <div className='TeamDescription'>{item.description}</div>
                            </TextWrapper>
                            <Button onClick={()=>navigate(`../faq/${item.partName.toLowerCase()}`)}>
                                <KeyboardDoubleArrowRightIcon fontSize="large"/>
                            </Button>
                        </TeamListItem>
                    ))
                }
            </TeamListWrapper>
        </>
    );
}

const TeamListWrapper = styled.div`
  display: grid;
  row-gap: 3rem;
  margin-top: 100px;
`

const TeamListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  line-height: ${viewHeightCalc(60)};
`

const TextWrapper = styled.div`
  .TeamName::first-letter {
    color: ${props => props.theme.color.primary}
  }

  .TeamName {
    margin: 4px 0;
    font-size: ${props => props.theme.fontSize.desktop.title};
    @media (max-width: 1800px) {
      font-size: ${props => props.theme.fontSize.desktop.title};
    }
    @media (max-width: 1200px) {
      font-size: ${props => props.theme.fontSize.tablet.title};
    }
    @media (max-width: 768px) {
      font-size: ${props => props.theme.fontSize.smallTablet.title};
    }
    @media (max-width: 576px) {
      font-size: ${props => props.theme.fontSize.mobile.title};
    }
    @media (max-width: 280px) {
      font-size: ${props => props.theme.fontSize.fold.title};
    }
  }

  .TeamDescription {
    color: ${props => props.theme.color.gray};
    font-size: ${props => props.theme.fontSize.desktop.subtitle};
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
    @media (max-width: 280px) {
      font-size: ${props => props.theme.fontSize.fold.subtitle};
    }
  }
`

const Button = styled(Fab)`
  background: ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.white};
  box-shadow: none;
  &:hover{
    background: ${props => props.theme.color.primary};
  }
`
