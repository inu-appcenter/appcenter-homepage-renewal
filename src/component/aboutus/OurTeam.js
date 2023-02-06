import styled from "styled-components";
import {faqString} from "../../resource/string/faqString";
import {viewHeightCalc, viewWidthCalc} from "../../lib/viewportCalculate";
import {Fab} from "@mui/material"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function OurTeam() {
    return (
        <>
            <TeamListWrapper>
                {
                    faqString.map((item) => (
                        <TeamListItem>
                            <TextWrapper>
                                <div className='TeamName'>{item.partName}</div>
                                <div className='TeamDescription'>{item.description}</div>
                            </TextWrapper>
                            <Button>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${viewHeightCalc(68)};
`

const TeamListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  line-height: ${viewHeightCalc(60)};
  margin-bottom: ${viewHeightCalc(50)};
`

const TextWrapper = styled.div`
  .TeamName::first-letter {
    color: ${props => props.theme.color.primary}
  }

  .TeamName {
    font-size: ${viewWidthCalc(50)};
  }

  .TeamDescription {
    font-size: ${viewWidthCalc(30)};
    color: ${props => props.theme.color.gray};
  }
`

const Button = styled(Fab)`
  background: ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.white};
  box-shadow: none;
`
