import styled from "styled-components";

export default function Subtitle({title}){
    return(
        <SubtitleWrapper>
            <Text>{title}</Text>
        </SubtitleWrapper>
    )
}

const SubtitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Text = styled.p`
  color:${props => props.theme.color.primary};
  font-size: ${props=> props.theme.fontSize.default.subtitle};
  font-weight: 700;
  &::before{
    content:'•';
    margin-right: 4px;
  }
  &::after{
    content:'•';
    margin-left: 4px;
  }
`
