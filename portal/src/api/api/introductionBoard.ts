import { getApiData } from './axios.ts';
import API from '../constants/api.ts';
import {
  IntroductionBoardPublicAllListResponse,
  IntroductionBoardPublicByIdRequest,
  IntroductionBoardPublicByIdResponse,
} from '../dto/introductionBoard.ts';

export const getIntroductionBoardPublicAll = () => {
  return getApiData<IntroductionBoardPublicAllListResponse>({
    method: 'GET',
    url: API.INTRODUCTION_BOARD_PUBLIC_ALL,
  });
};
export const getIntroductionBoardPublicById = ({
  id,
}: IntroductionBoardPublicByIdRequest) => {
  return getApiData<IntroductionBoardPublicByIdResponse>({
    method: 'GET',
    url: API.INTRODUCTION_BOARD_PUBLIC_BY_ID(id),
  });
};
