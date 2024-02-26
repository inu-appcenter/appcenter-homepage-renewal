import styled from 'styled-components';

export const TitleTextStyle = styled.h1`
  font-weight: ${(props) => props.fontWeight || '700'};
  margin: 0;
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.theme.fontSize.bigDesktop.title};
  @media (max-width: 1800px) {
    font-size: ${(props) => props.theme.fontSize.desktop.title};
  }
  @media (max-width: 1200px) {
    font-size: ${(props) => props.theme.fontSize.tablet.title};
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.smallTablet.title};
  }
  @media (max-width: 576px) {
    font-size: ${(props) => props.theme.fontSize.mobile.title};
  }
  @media (max-width: 280px) {
    font-size: ${(props) => props.theme.fontSize.fold.title};
  }
  ${(props) =>
      props.firstLetterAccent &&
      `&&::first-letter {
    color: ${props.theme.color.primary};
  }`}
}
`;

export const SubTitleStyle = styled.h2`
    font-weight: 600;
    margin: 0;
    color: ${(props) => props.fontColor};
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
    @media (max-width: 280px) {
        font-size: ${(props) => props.theme.fontSize.fold.subtitle};
    }
    ${(props) =>
        props.firstLetterAccent &&
        `&&::first-letter {
    color: ${props.theme.color.primary};
  }`}
`;

export const PlainTextStyle = styled.p`
    font-weight: 600;
    margin: 0;
    color: ${(props) => props.fontColor};
    font-size: ${(props) => props.theme.fontSize.bigDesktop.text};
    @media (max-width: 1800px) {
        font-size: ${(props) => props.theme.fontSize.desktop.text};
    }
    @media (max-width: 1200px) {
        font-size: ${(props) => props.theme.fontSize.tablet.text};
    }
    @media (max-width: 768px) {
        font-size: ${(props) => props.theme.fontSize.smallTablet.text};
    }
    @media (max-width: 576px) {
        font-size: ${(props) => props.theme.fontSize.mobile.text};
    }
    @media (max-width: 280px) {
        font-size: ${(props) => props.theme.fontSize.fold.text};
    }
`;
