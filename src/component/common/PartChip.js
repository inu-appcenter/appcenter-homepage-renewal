import styled from "styled-components";
import {partInfo} from "../../resource/string/partInfo";
import {Button} from "@mui/material";


export function PartChip({
                             url = partInfo[0].fullUrl,
                             onButtonClick,
                             common = true,
                                web=false
}) {
    return (
        <>
            <ButtonGroup>
                {partInfo.map((part, index) => (
                    (!common && part.partName === 'Common')
                        ? null
                        : (!web && part.partName === 'Web')
                            ? null
                            : <Button
                                key={part.id}
                                className={url.split('/').at(-1) === part.partName.toLowerCase() ? 'active' : ''}
                                onClick={e => onButtonClick(e, part.partName.toLowerCase())}
                            >
                                {part.partName}
                                {/*{part.partName === "Common" && <Divider/>}*/}
                            </Button>
                ))}
            </ButtonGroup>
        </>
    )
}

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items:center;
  gap: 30px;
  @media (max-width: 576px) {
    gap: 4px;
    justify-content: center;
  }
  Button {
    outline: none;
    color: ${props => props.theme.color.gray};
    font-weight: 600;
    border-radius: 999px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .10);
    text-transform: none;
    font-size: ${props => props.theme.fontSize.bigDesktop.caption};
    height: auto;
    padding: 12px 40px;
    @media (max-width: 1800px) {
      font-size: ${props => props.theme.fontSize.desktop.caption};
      padding: 8px 20px;
    }
    @media (max-width: 1200px) {
      font-size: ${props => props.theme.fontSize.tablet.caption};
    }
    @media (max-width: 768px) {
      font-size: ${props => props.theme.fontSize.smallTablet.caption};
      padding: 4px 12px;
    }
    @media (max-width: 576px) {
      font-size: ${props => props.theme.fontSize.mobile.caption};
      padding: 4px 8px;
      margin-top: 4px;
    }
  }

  Button.active {
    color: ${props => props.theme.color.primary};
    border: solid 1px ${props => props.theme.color.primary};
    box-shadow: 0 4px 4px rgba(23, 115, 224, .15); // ????????? ?????? ?????? ??? ??????
  }
`;
const Divider = styled.div`
  position: absolute;
  right: -50px;
  height: 59px;
  width: 0;
  border-right: 2px solid rgba(0,0,0,.15);
  @media (max-width: 1800px) {
    right: -80px;
    height: 47.5px;
  }
  @media (max-width: 1200px) {
    right: calc((540.2px - 100vw) / 8);
    height: 44px;
  }
  @media (max-width: 768px) {
    right: calc((440.6px - 100vw) / 8);
    height: 32.5px;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
