import styled from "styled-components";
import {viewHeightCalc} from "../../lib/viewportCalculate";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {Button} from "@mui/material";

export default function RegisterInfo() {
    const text = 'Ready To get\nstarted?'
    return (
        <RegisterInfoWrapper>
            <RegisterTextWrapper>
                <div className='top'>app center</div>
                <div className='middle'>{text}</div>
                <Button variant='outlined'>
                    지원 방법 바로가기
                    <ArrowRightAltIcon sx={{ fontSize: 40 }}/>
                </Button>
            </RegisterTextWrapper>
        </RegisterInfoWrapper>
    );
}

const RegisterInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const RegisterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color.yellow};

  .top {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: ${viewHeightCalc(24)};
    text-transform: uppercase;
  }

  .middle {
    font-size: 64px;
    font-weight: 500;
    white-space: pre-line;
    text-align: center;
    margin-bottom: ${viewHeightCalc(58)}
  }
;
}

& > Button {
  border-radius: 34.5px;
  background: ${props => props.theme.color.white};
  border: 1px solid ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.yellow};
  font-size: 18px;
}
`


