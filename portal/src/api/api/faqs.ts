import API from '../constants/api.ts';
import {getApiData} from './axios.ts';
import {FaqPublicAllListResponse} from '../dto/faqs.ts';
import {Part} from '../../types/common.ts';

export const getFaqsPublicAll = (topic: Part) => {
  return getApiData<FaqPublicAllListResponse>({
    method: 'GET',
    url: API.FAQS_PUBLIC_ALL({ topic: topic }),
  });
};
