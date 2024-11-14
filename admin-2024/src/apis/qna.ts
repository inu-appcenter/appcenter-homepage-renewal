import { API } from '@/constants/api';
import { AllQnAResDto, QnaEntity } from '@/types/qnaType';
import getAPIResponseData from './getAPIResponseData';

// FaQ 한 개 등록
export const postFaq = async (qnaData: QnaEntity) => {
  return await getAPIResponseData<QnaEntity>({
    method: 'POST',
    url: API.FAQ,
    data: qnaData,
  });
};

// FaQ 한 개 수정
export const patchFaq = async (qnaData: QnaEntity) => {
  return await getAPIResponseData<QnaEntity>({
    method: 'PATCH',
    url: API.FAQ,
    data: qnaData,
  });
};

// FaQ 전체 가져오기
export const getAllFaq = async () => {
  return await getAPIResponseData<AllQnAResDto>({
    method: 'GET',
    url: API.GET_ALL_FAQS,
  });
};

// FaQ 한 개 삭제
export const deleteFaq = async (id: number) => {
  return await getAPIResponseData<{ id: number }>({
    method: 'DELETE',
    url: API.DELETE_FAQ(id),
  });
};
