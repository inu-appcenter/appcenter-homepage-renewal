import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { partInfo } from '../../resource/string/partInfo';
import { PageTitle } from '../../component/common/PageTitle';

export function FAQDetailListContainer() {
    const location = useLocation();
    const [pageInfo, setPageInfo] = useState(
        partInfo.find((v) => location.pathname === v.fullUrl)
    );
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const viewData = await axios
                .get(
                    'https://server.inuappcenter.kr/faqs/public/all-faq-boards'
                )
                .then((res) => {
                    console.log(viewData);
                    setData(
                        res.data.filter(
                            (item) => item.part === pageInfo.partName
                        )
                    );
                    console.log(
                        res.data.filter(
                            (item) => item.part === pageInfo.partName
                        )
                    );
                });
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    useEffect(() => {
        setPageInfo(partInfo.find((v) => location.pathname === v.fullUrl));
    }, [location]);

    return (
        <>
            <TitleWrapper>
                <PageTitle title={pageInfo.partName} />
            </TitleWrapper>
            <FAQDetailListBox>
                {data &&
                    data.map((item, index) => (
                        <FAQDetailListItem key={index}>
                            <p className='question'>{item.question}</p>
                            <p className='answer'>{item.answer}</p>
                        </FAQDetailListItem>
                    ))}
            </FAQDetailListBox>
        </>
    );
}

const TitleWrapper = styled.div`
    padding: 30px 0;
`;

const FAQDetailListBox = styled.div`
    display: grid;
    row-gap: 2rem;
    column-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
        gap: 1rem;
    }
    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;

const FAQDetailListItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 50px;
    background: rgba(23, 115, 224, 0.1);
    padding: 40px;
    text-indent: -1em;
    .question {
        color: ${(props) => props.theme.color.black};
        font-weight: 700;
        padding: 12px 3rem;
        border-radius: 999px;
        background: ${(props) => props.theme.color.white};
        margin: 0;
        &::before {
            content: 'Q. ';
            position: relative;
        }
    }
    .answer {
        color: ${(props) => props.theme.color.primary};
        font-weight: 500;
        padding: 4px 3rem;
        margin: 0;
        line-height: 1.5;
        &::before {
            content: 'A. ';
            position: relative;
        }
    }
    font-size: ${(props) => props.theme.fontSize.desktop.text};
    @media (max-width: 1800px) {
        font-size: ${(props) => props.theme.fontSize.desktop.text};
        padding: 30px;
    }
    @media (max-width: 1200px) {
        font-size: ${(props) => props.theme.fontSize.tablet.text};
    }
    @media (max-width: 768px) {
        border-radius: 30px;
        padding: 20px;
        font-size: ${(props) => props.theme.fontSize.smallTablet.text};
    }
    @media (max-width: 576px) {
        font-size: ${(props) => props.theme.fontSize.mobile.text};
        padding: 20px;
    }
    @media (max-width: 280px) {
        font-size: ${(props) => props.theme.fontSize.fold.text};
    }
`;
