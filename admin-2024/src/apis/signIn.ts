import { API } from '@/constants/api';
import { SignInEntity, SignInResDto } from '@/types/signInType';
import getAPIResponseData from './getAPIResponseData';

// 로그인 요청
export const postSignIn = async (signInData: SignInEntity) => {
  return await getAPIResponseData<SignInResDto, SignInEntity>({
    method: 'POST',
    url: API.SIGN_IN,
    data: signInData,
  });
};
