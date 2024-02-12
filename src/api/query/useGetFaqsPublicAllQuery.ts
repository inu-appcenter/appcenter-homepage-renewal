import { useSuspenseQuery } from '@tanstack/react-query';
import { getFaqsPublicAll } from '@api/api/faqs.ts';
import { PART } from '@constants/common.ts';
import QUERY_KEY from '@api/constants/queryKey.ts';

const useGetFaqsPublicAllQuery = (topic: keyof typeof PART) => {
  return useSuspenseQuery({
    queryFn: () => getFaqsPublicAll(topic),
    queryKey: QUERY_KEY.FAQS_PUBLIC_ALL(topic),
  });
};

export default useGetFaqsPublicAllQuery;
