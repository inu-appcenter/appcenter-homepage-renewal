import { getApiData } from './axios.ts';
import API from '../constants/api.ts';
import { IntroductionBoardPublicAllListResponse } from '../dto/introductionBoard.ts';

export const getIntroductionBoardPublicAll = () => {
  return getApiData<IntroductionBoardPublicAllListResponse>({
    method: 'GET',
    url: API.INTRODUCTION_BOARD_PUBLIC_ALL,
  });
};
