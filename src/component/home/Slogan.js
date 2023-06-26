import styled, { css } from 'styled-components';
import { viewWidthCalc } from '../../lib/viewportCalculate';
import { slogan } from '../../resource/data/aboutUs';
import { useEffect, useState } from 'react';

export default function Slogan() {
    const [text, setText] = useState(slogan.description.text);

    const handleResize = () => {
        if (window.innerWidth < 576) {
            setText(slogan.description.mobileText);
        } else {
            setText(slogan.description.text);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <SloganWrapper>
            <Text type='top'>{slogan.top.text}</Text>
            <Text type='title'>{slogan.title.text}</Text>
            <Text type='description'>{text}</Text>
        </SloganWrapper>
    );
}

const SloganWrapper = styled.div``;

const Text = styled.div`
    font-style: normal;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${(props) => (props.type === 'title' ? '#FEC853' : '#1E4995')};
    font-weight: ${(props) =>
        props.type === 'top' ? 600 : props.type === 'title' ? 700 : 400};
    margin-bottom: ${viewWidthCalc(24)};
    white-space: pre-line;
    word-break: keep-all;
    ${(props) =>
        props.type === 'title'
            ? css`
                  font-size: ${(props) =>
                      props.theme.fontSize.bigDesktop.title};
                  @media (max-width: 1800px) {
                      font-size: ${(props) =>
                          props.theme.fontSize.desktop.title};
                  }
                  @media (max-width: 1200px) {
                      font-size: ${(props) =>
                          props.theme.fontSize.tablet.title};
                  }
                  @media (max-width: 768px) {
                      font-size: ${(props) =>
                          props.theme.fontSize.smallTablet.title};
                  }
                  @media (max-width: 576px) {
                      font-size: ${(props) =>
                          props.theme.fontSize.mobile.title};
                  }
              `
            : css`
                  font-size: ${(props) =>
                      props.theme.fontSize.bigDesktop.caption};
                  @media (max-width: 1800px) {
                      font-size: ${(props) =>
                          props.theme.fontSize.desktop.caption};
                  }
                  @media (max-width: 1200px) {
                      font-size: ${(props) =>
                          props.theme.fontSize.tablet.caption};
                  }
                  @media (max-width: 768px) {
                      font-size: ${(props) =>
                          props.theme.fontSize.smallTablet.caption};
                  }
                  @media (max-width: 576px) {
                      font-size: ${(props) =>
                          props.theme.fontSize.mobile.caption};
                  }
              `}
`;
