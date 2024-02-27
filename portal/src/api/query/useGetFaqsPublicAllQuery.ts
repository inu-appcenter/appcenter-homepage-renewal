import {useSuspenseQuery} from '@tanstack/react-query';
import {getFaqsPublicAll} from '../api/faqs.ts';
import QUERY_KEY from '../constants/queryKey.ts';
import {Part} from '../../types/common.ts';

const useGetFaqsPublicAllQuery = (topic: Part) => {
  return useSuspenseQuery({
    queryFn: () => getFaqsPublicAll(topic),
    queryKey: QUERY_KEY.FAQS_PUBLIC_ALL(topic),
  });
};

export default useGetFaqsPublicAllQuery;
