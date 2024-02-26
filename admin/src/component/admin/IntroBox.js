import styled, { css } from 'styled-components';

export default function IntroBox({ introInfo }) {
    return (
        <>
            <IntroDiv>
                <Text type='title'>{introInfo.title}</Text>
                <Text type='top'>{introInfo.description}</Text>
            </IntroDiv>
        </>
    );
}

const IntroDiv = styled.div`
    position: relative;
    width: 700px;
    height: 130px;
    background-color: #f2f2f2;
    margin: 0 auto 2rem auto;
    top: 20px;
    border-radius: 20px;
    padding-top: 50px;
`;

const Text = styled.div`
    font-style: normal;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${(props) => (props.type === 'title' ? '#424242' : '#848484')};
    font-weight: ${(props) =>
        props.type === 'top' ? 100 : props.type === 'title' ? 600 : 100};
    margin-bottom: 3px;
    white-space: pre-line;

    ${(props) =>
        props.type === 'title'
            ? css`
                  font-size: ${(props) => props.theme.fontSize.tablet.title};
              `
            : css`
                  font-size: ${(props) => props.theme.fontSize.tablet.caption};
              `}
`;
