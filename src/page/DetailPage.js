import styled, { createGlobalStyle, css } from 'styled-components';
import { HiBars3 } from 'react-icons/hi2';

import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal'; // react-modal 라이브러리 import
import DetailContainer from '../container/product/DetailContainer';

import 'swiper/css/virtual';

export default function DetailPage() {
    const id = '27';
    return (
        <div>
            <DetailContainer />
        </div>
    );
}
