import styled from "styled-components";

export const
    PageTitle = ({title, subTitle = null}) => {
    return (
        <TitleTextWrap >
            <TitleTextBox>{title}</TitleTextBox>
            {
                subTitle &&
                <SubTitle>
                    {subTitle}
                </SubTitle>
            }
        </TitleTextWrap>
    )
}

const TitleTextWrap = styled.div`
  text-transform: uppercase;
`

const TitleTextBox = styled.h1`
  font-weight: 700;
  margin:0;
  color: ${props => props.theme.color.primary};
  font-size: ${props=>props.theme.fontSize.bigDesktop.title};
  @media(max-width: 1800px) {
    font-size: ${props=>props.theme.fontSize.desktop.title};
  }
  @media(max-width: 1200px) {
    font-size: ${props=>props.theme.fontSize.tablet.title};
  }
  @media(max-width: 768px) {
    font-size: ${props=>props.theme.fontSize.smallTablet.title};
  }
  @media(max-width: 576px) {
    font-size: ${props=>props.theme.fontSize.mobile.title};
  }
  @media (max-width: 280px) {
    font-size: ${props => props.theme.fontSize.fold.title};
  }
`

const SubTitle = styled.h2`
  font-weight: 600;
  margin:0;
  color: ${props => props.theme.color.gray};
  font-size: ${props=>props.theme.fontSize.bigDesktop.subtitle};
  @media(max-width: 1800px) {
    font-size: ${props=>props.theme.fontSize.desktop.subtitle};
  }
  @media(max-width: 1200px) {
    font-size: ${props=>props.theme.fontSize.tablet.subtitle};
  }
  @media(max-width: 768px) {
    font-size: ${props=>props.theme.fontSize.smallTablet.subtitle};
  }
  @media(max-width: 576px) {
    font-size: ${props=>props.theme.fontSize.mobile.subtitle};
  }
  @media (max-width: 280px) {
    font-size: ${props => props.theme.fontSize.fold.subtitle};
  }
`
