import { PART } from '@constants/common.ts';
import API from '@api/constants/api.ts';
import { getApiData } from '@api/api/axios.ts';
import { FaqPublicAllListResponse } from '@api/dto/faqs.ts';

export const getFaqsPublicAll = (topic: keyof typeof PART) => {
  return getApiData<FaqPublicAllListResponse>({
    method: 'GET',
    url: API.FAQS_PUBLIC_ALL({ topic: topic }),
  });
};
