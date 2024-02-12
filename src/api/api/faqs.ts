import API from '@api/constants/api.ts';
import { getApiData } from '@api/api/axios.ts';
import { FaqPublicAllListResponse } from '@api/dto/faqs.ts';
import { Part } from '@type/common.ts';

export const getFaqsPublicAll = (topic: Part) => {
  return getApiData<FaqPublicAllListResponse>({
    method: 'GET',
    url: API.FAQS_PUBLIC_ALL({ topic: topic }),
  });
};
