import { getIntroductionBoardPublicById } from '../api/introductionBoard.ts';
import QUERY_KEY from '../constants/queryKey.ts';
import { useSuspenseQuery } from '@tanstack/react-query';
import { IntroductionBoardPublicByIdRequest } from '@api/dto/introductionBoard.ts';

const useGetIntroductionBoardPublicAllQuery = ({
  id,
}: IntroductionBoardPublicByIdRequest) => {
  return useSuspenseQuery({
    queryFn: () => getIntroductionBoardPublicById({ id }),
    queryKey: QUERY_KEY.INTRODUCTION_BOARD(id),
  });
};

export default useGetIntroductionBoardPublicAllQuery;
