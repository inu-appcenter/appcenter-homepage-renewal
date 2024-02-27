import { getIntroductionBoardPublicAll } from '../api/introductionBoard.ts';
import QUERY_KEY from '../constants/queryKey.ts';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetIntroductionBoardPublicAllQuery = () => {
  return useSuspenseQuery({
    queryFn: getIntroductionBoardPublicAll,
    queryKey: QUERY_KEY.INTRODUCTION_BOARD(),
  });
};

export default useGetIntroductionBoardPublicAllQuery;
