import styled from "styled-components";
import {viewWidthCalc} from "../../lib/viewportCalculate";

export default function Slogan() {
    return (
        <SloganWrapper>
            <Text type='top'>INU APP CENTER</Text>
            <Text type='title'>우리에게 필요한 것은 우리가 만든다!</Text>
            <Text type='description'>앱센터는 교내 정보전산원 소속으로, 학생들이 애플리케이션과 서비스를 만드는 공간입니다.
                활동에 필요한 비용의 일부를 전산원으로부터 지원받고 있습니다.</Text>
        </SloganWrapper>
    )
}

const SloganWrapper = styled.div`
  margin-top: 80px;
  margin-left: ${viewWidthCalc(220)};
  margin-right: ${viewWidthCalc(220)};
`;

const Text = styled.div`
  font-style: normal;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: ${props => props.type === 'top' && `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`};
  color: ${props => props.type === 'title' ? '#FEC853' : '#1E4995'};
  font-weight: ${props => props.type === 'top' ? 600 : props.type === 'title' ? 700 : 400};
  font-size: ${props => props.type === 'title' ? `${viewWidthCalc(64)}` : `${viewWidthCalc(16)}`};
  margin-bottom: ${viewWidthCalc(24)};
`;

