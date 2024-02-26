import styled from 'styled-components';

export default function Subtitle({ title }) {
    return (
        <SubtitleWrapper>
            <Text>{title}</Text>
        </SubtitleWrapper>
    );
}

const SubtitleWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Text = styled.p`
    color: ${(props) => props.theme.color.primary};
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSize.bigDesktop.subtitle};
    @media (max-width: 1800px) {
        font-size: ${(props) => props.theme.fontSize.desktop.subtitle};
    }
    @media (max-width: 1200px) {
        font-size: ${(props) => props.theme.fontSize.tablet.subtitle};
    }
    @media (max-width: 768px) {
        font-size: ${(props) => props.theme.fontSize.smallTablet.subtitle};
    }
    @media (max-width: 576px) {
        font-size: ${(props) => props.theme.fontSize.mobile.subtitle};
    }
    &::before {
        content: '•';
        margin-right: 4px;
    }
    &::after {
        content: '•';
        margin-left: 4px;
    }
`;
