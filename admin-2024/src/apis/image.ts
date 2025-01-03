import { API } from '@/constants/api';
import getAPIResponseData from './getAPIResponseData';

// 사진 여러장 삭제하기
export const deletePhoto = async (image_ids: number[], board_id: number) => {
  const queryParams = new URLSearchParams();
  image_ids.forEach((image_id) =>
    queryParams.append('image_id', image_id.toString())
  );
  queryParams.append('board_id', board_id.toString());
  const url = `${API.DELETE_IMGS}?${queryParams.toString()}`;
  return await getAPIResponseData({
    method: 'DELETE',
    url,
  });
};
