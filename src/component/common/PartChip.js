import styled from 'styled-components';
import { partInfo } from '../../resource/string/partInfo';
import { Button } from '@mui/material';
import { Divider } from '@mui/joy';

export function PartChip({
    activePart = 'android',
    onButtonClick,
    common = true,
    web = false,
}) {
    return (
        <>
            <ButtonGroup>
                {partInfo.map((part, index) =>
                    !common && part.partName === 'Common' ? null : !web &&
                      part.partName === 'Web' ? null : (
                        <>
                            <Button
                                key={part.id}
                                className={
                                    activePart === part.partName.toLowerCase()
                                        ? 'active'
                                        : ''
                                }
                                onClick={(e) =>
                                    onButtonClick(
                                        e,
                                        part.partName.toLowerCase()
                                    )
                                }
                            >
                                {part.partName}
                            </Button>
                            {part.partName === 'Common' && (
                                <Divider orientation='vertical' />
                            )}
                        </>
                    )
                )}
            </ButtonGroup>
        </>
    );
}

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
    @media (max-width: 576px) {
        gap: 4px;
        justify-content: center;
    }

    Button {
        outline: none;
        color: ${(props) => props.theme.color.gray};
        font-weight: 600;
        border-radius: 999px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
        text-transform: none;
        font-size: ${(props) => props.theme.fontSize.bigDesktop.caption};
        height: auto;
        padding: 12px 40px;
        @media (max-width: 1800px) {
            font-size: ${(props) => props.theme.fontSize.desktop.caption};
            padding: 8px 20px;
        }
        @media (max-width: 1200px) {
            font-size: ${(props) => props.theme.fontSize.tablet.caption};
        }
        @media (max-width: 768px) {
            font-size: ${(props) => props.theme.fontSize.smallTablet.caption};
            padding: 4px 12px;
        }
        @media (max-width: 576px) {
            font-size: ${(props) => props.theme.fontSize.mobile.caption};
            padding: 4px 8px;
            margin-top: 4px;
        }
    }

    Button.active {
        color: ${(props) => props.theme.color.primary};
        border: solid 1px ${(props) => props.theme.color.primary};
        box-shadow: 0 4px 4px rgba(23, 115, 224, 0.15); // 이렇게 해도 예쁜 것 같음
    }
`;
