import { API } from '@/constants/api';
import { IntroductionEntity, IntroductionPayload } from '@/types/introType';
import getAPIResponseData from './getAPIResponseData';

// 게시글 (1개) 저장하기
export const postIntroduction = async (data: IntroductionPayload) => {
  const formData = new FormData();

  // FormData에 데이터 추가
  formData.append('body', data.body);
  formData.append('title', data.title);
  formData.append('subTitle', data.subTitle);

  if (data.androidStoreLink) {
    formData.append('androidStoreLink', data.androidStoreLink);
  }

  if (data.appleStoreLink) {
    formData.append('appleStoreLink', data.appleStoreLink);
  }

  if (data.multipartFiles) {
    data.multipartFiles.forEach((file) => {
      formData.append('multipartFiles', file);
    });
  }

  return await getAPIResponseData({
    method: 'POST',
    url: API.INTRO_BOARD,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 게시글 수정
export const patchIntroduction = async (
  board_id: number,
  data: IntroductionPayload,
  photo_ids: number[] // 사진 수정(추가)이 있을 경우에는 경로에 /{photo_ids}를 포함해주세요
) => {
  const formData = new FormData();

  formData.append('body', data.body);
  formData.append('title', data.title);
  formData.append('subTitle', data.subTitle);

  if (data.androidStoreLink) {
    formData.append('androidStoreLink', data.androidStoreLink);
  }

  if (data.appleStoreLink) {
    formData.append('appleStoreLink', data.appleStoreLink);
  }

  if (data.multipartFiles) {
    data.multipartFiles.forEach((file) => {
      formData.append('multipartFiles', file);
    });
  }

  return await getAPIResponseData({
    method: 'PATCH',
    url: API.PATCH_INTRO_BOARD_ID(photo_ids),
    data: formData,
    params: { board_id },
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 게시글 (1개) 가져오기
export const getOneIntroduction = async (id: number) => {
  return await getAPIResponseData<IntroductionEntity>({
    method: 'GET',
    url: API.GET_INTRO_BOARD_ID(id),
  });
};

// 앱 소개 글 (전체) 조회
export const getAllIntroduction = async () => {
  return await getAPIResponseData<IntroductionEntity[]>({
    method: 'GET',
    url: API.ALL_INTRO_BOARD,
  });
};

// 게시글 (1개) 삭제하기
export const deleteInroduction = async (id: number) => {
  return await getAPIResponseData({
    method: 'DELETE',
    url: API.DELETE_INTRO_BOARD_ID(id),
  });
};
