import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000,
});

export const getApiData = async <T, D = T>(options: AxiosRequestConfig<D>) => {
  try {
    const result = await axiosInstance<T>(options);
    return result.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      import.meta.env.MODE === 'development' && console.error(e.toJSON());
    }
    throw e;
  }
};
