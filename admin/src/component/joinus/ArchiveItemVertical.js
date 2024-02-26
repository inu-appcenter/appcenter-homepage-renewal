import styled from 'styled-components';
import theme from '../../resource/style/Theme';
import { viewHeightCalc } from '../../lib/viewportCalculate';
import chipBackground from '../../resource/img/archive_chip.svg';

const ArchiveItemVertical = ({
    chipText = '방학',
    chipColor = theme.color.cyan[0],
    pointText = '1월',
    lineText = '팀별 프로젝트',
    listItem = null,
    last = false,
}) => {
    return (
        <ItemWrapper>
            <CenterBox>
                <Point content={pointText} color={chipColor} />
                <VerticalLine>
                    {listItem && (
                        <ul className='listBox'>
                            <li>{listItem}</li>
                        </ul>
                    )}
                    <div className='chipText'>{chipText}</div>
                    <div className='lineText'>{lineText}</div>
                </VerticalLine>
                {last && <Point content={'12월'} color={theme.color.cyan[4]} />}
            </CenterBox>
        </ItemWrapper>
    );
};

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const CenterBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Point = styled.div`
    background-color: ${(props) => props.color};
    width: 32px;
    height: 32px;
    border-radius: 999px;

    &::after {
        content: '${(props) => props.content}';
        position: relative;
        top: 7px;
        right: -36px;
        color: ${(props) => props.theme.color.primary};
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

const VerticalLine = styled.div`
    background-color: ${(props) => props.theme.color.primary};
    width: 2px;
    max-height: 180px;
    height: ${viewHeightCalc(180)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    .listBox {
        display: block;
        position: relative;
        right: -2.5rem;
        width: 120px;
        margin-block-start: 0;
        padding-left: 0;
        font-size: 0.75rem;
    }
    .chipText {
        position: relative;
        right: -1.5rem;
        width: 80px;
        height: 1.5rem;
        text-align: center;
        color: ${(props) => props.theme.color.secondary};
        margin-top: 0.25rem;
        padding-top: 0.25rem;
        background-image: url(${chipBackground});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
    .lineText {
        position: relative;
        right: -1.5rem;
        width: 120px;
        font-size: 0.875rem;
        margin-top: 0.75rem;
        color: ${(props) => props.theme.color.cyan[4]};
    }
`;
export default ArchiveItemVertical;
