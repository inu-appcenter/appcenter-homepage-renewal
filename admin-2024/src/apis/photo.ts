import { API } from '@/constants/api';
import { PhotoEntity, PhotoPayload } from '@/types/photoType';
import getAPIResponseData from './getAPIResponseData';

// 게시글 (1개) 저장하기
export const postPhoto = async (data: PhotoPayload) => {
  const formData = new FormData();

  // FormData에 데이터 추가
  formData.append('body', data.body);

  if (data.multipartFiles) {
    data.multipartFiles.forEach((file) => {
      formData.append('multipartFiles', file);
    });
  }

  return await getAPIResponseData({
    method: 'POST',
    url: API.PHOTO_BOARD,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 게시글 수정
export const patchPhoto = async (
  board_id: number,
  data: PhotoPayload,
  photo_ids: number[] // 사진 수정(추가)이 있을 경우에는 경로에 /{photo_ids}를 포함해주세요
) => {
  const formData = new FormData();

  formData.append('body', data.body);

  if (data.multipartFiles) {
    data.multipartFiles.forEach((file) => {
      formData.append('multipartFiles', file);
    });
  }

  return await getAPIResponseData({
    method: 'PATCH',
    url: API.PATCH_PHOTO_BOARD_ID(photo_ids),
    data: formData,
    params: { board_id },
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 게시글 (1개) 가져오기
export const getOnePhoto = async (id: number) => {
  return await getAPIResponseData<PhotoEntity>({
    method: 'GET',
    url: API.GET_PHOTO_BOARD_ID(id),
  });
};

// 앱 소개 글 (전체) 조회
export const getAllPhoto = async () => {
  return await getAPIResponseData<PhotoEntity[]>({
    method: 'GET',
    url: API.ALL_PHOTO_BOARD,
  });
};

// 게시글 (1개) 삭제하기
export const deletePhoto = async (id: number) => {
  return await getAPIResponseData({
    method: 'DELETE',
    url: API.DELETE_PHOTO_BOARD_ID(id),
  });
};
