import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AppIntroComponent from '../../component/product/AppIntroComponent';

// App 컴포넌트 정의
export default function DetailContainer() {
    const [modalOpen, setModalOpen] = useState(false);
    const [appData, setAppData] = useState([]);

    useEffect(() => {
        axios
            .get('https://server.inuappcenter.kr/introduction-board/public/26')
            .then((res) => {
                setAppData(res.data);
            });
    }, []);

    return (
        <div>
            <AppIntroComponent appData={appData} />
        </div>
    );
}
