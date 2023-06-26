import Subtitle from '../../component/joinus/Subtitle';
import styled from 'styled-components';
import { viewHeightCalc } from '../../lib/viewportCalculate';
import RegisterStep from '../../component/joinus/RegisterStep';

export default function RegisterStepContainer() {
    return (
        <RegisterStepContainerWrapper>
            <div id='registerStep'>
                <Subtitle title='지원 방법' />
            </div>
            <RegisterStep />
        </RegisterStepContainerWrapper>
    );
}

const RegisterStepContainerWrapper = styled.div`
    margin-top: ${viewHeightCalc(70)};
`;
