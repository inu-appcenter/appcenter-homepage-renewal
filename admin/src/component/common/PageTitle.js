import styled from 'styled-components';
import { SubTitleStyle, TitleTextStyle } from '../../resource/style/TextStyle';
import theme from '../../resource/style/Theme';

export const PageTitle = ({ title, subTitle = null }) => {
    return (
        <TitleTextWrap>
            <TitleTextStyle fontColor={theme.color.primary}>
                {title}
            </TitleTextStyle>
            {subTitle && (
                <SubTitleStyle fontColor={theme.color.gray}>
                    {subTitle}
                </SubTitleStyle>
            )}
        </TitleTextWrap>
    );
};

const TitleTextWrap = styled.div`
    text-transform: uppercase;
`;
