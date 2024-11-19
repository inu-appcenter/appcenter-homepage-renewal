import { API } from '@/constants/api';
import { PartEntity } from '@/types/genterationType';
import getAPIResponseData from './getAPIResponseData';

// 전체 파트 목록 가져오기
export const getAlParts = async () => {
  return await getAPIResponseData<PartEntity>({
    method: 'GET',
    url: API.ALL_PARTS,
  });
};
