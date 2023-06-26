import styled from 'styled-components';
import { viewHeightCalc, viewWidthCalc } from '../../lib/viewportCalculate';
import chipBackground from '../../resource/img/archive_chip.svg';
import theme from '../../resource/style/Theme';

const ArchiveItem = ({
    chipText = '방학',
    chipColor = theme.color.primary,
    pointText = '1월',
    lineText = '팀별 프로젝트',
    listItem = null,
    last = false,
}) => {
    return (
        <ItemWrapper>
            <CenterBox>
                <Point content={pointText} color={chipColor} />
                <Hr beforeContent={chipText} content={lineText} />
                {last && <Point content={'12월'} color={theme.color.cyan[4]} />}
            </CenterBox>
            {listItem && (
                <ListBox>
                    <li>{listItem}</li>
                </ListBox>
            )}
        </ItemWrapper>
    );
};

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const CenterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ListBox = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 60px;
    -webkit-padding-start: 1rem;
`;

const Point = styled.div`
    background-color: ${(props) => props.color};
    width: 32px;
    height: 32px;
    border-radius: 999px;

    &::after {
        content: '${(props) => props.content}';
        display: flex;
        justify-content: flex-start;
        position: relative;
        top: 50px;
        color: ${(props) => props.theme.color.primary};
        width: 4rem;
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
    }
`;

const Hr = styled.div`
    background-color: ${(props) => props.theme.color.primary};
    height: 2px;
    max-width: 240px;
    width: ${viewWidthCalc(260)};

    &::before {
        content: '${(props) => props.beforeContent}';
        border-radius: 34.5px;
        background-image: url(${chipBackground});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        padding: 4px;
        color: ${(props) => props.theme.color.yellow};
        font-size: 18px;
        display: flex;
        justify-content: center;
        position: relative;
        bottom: ${viewHeightCalc(60)};
    }

    &::after {
        content: '${(props) => props.content}';
        display: flex;
        justify-content: center;
        color: ${(props) => props.theme.color.cyan[4]};
    }
`;

export default ArchiveItem;
