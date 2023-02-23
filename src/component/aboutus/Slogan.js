import styled from "styled-components";
import {viewWidthCalc} from "../../lib/viewportCalculate";
import {slogan} from "../../resource/data/aboutUs";

export default function Slogan() {
    return (
        <SloganWrapper>
            <Text type='top'>{slogan.top.text}</Text>
            <Text type='title'>{slogan.title.text}</Text>
            <Text type='description'>{slogan.description.text}</Text>
        </SloganWrapper>
    )
}

const SloganWrapper = styled.div`
  margin-top: 80px;
`;

const Text = styled.div`
  font-style: normal;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: ${props => props.type === 'top' && `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`};
  color: ${props => props.type === 'title' ? '#FEC853' : '#1E4995'};
  font-weight: ${props => props.type === 'top' ? 600 : props.type === 'title' ? 700 : 400};
  font-size: ${props => props.type === 'title' ? `60px` : `16px`};
  margin-bottom: ${viewWidthCalc(24)};
  white-space: pre-line;
`;
