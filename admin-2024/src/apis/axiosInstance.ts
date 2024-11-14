import { BASE_URL } from '@/constants/api';
import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});

// 요청 인터셉터
// axiosInstance.interceptors.request.use();

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  async function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    const statusCode = error.response?.status;
    const errorData = error.response?.data;

    // 400 오류
    if (statusCode === 400) {
      alert(errorData);
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
