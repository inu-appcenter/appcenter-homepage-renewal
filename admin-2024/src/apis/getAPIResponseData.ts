import axios, { AxiosRequestConfig } from 'axios';
import axiosInstance from './axiosInstance';

const getAPIResponseData = async <T, D = T>(option: AxiosRequestConfig<D>) => {
  try {
    const result = await axiosInstance<T>(option);
    return result.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (process.env.NODE_ENV === 'development') {
        console.error(e.toJSON());
      }
    }
    throw e;
  }
};
export default getAPIResponseData;
