import { API } from '@/constants/api';
import { RoleEntity } from '@/types/roleType';
import getAPIResponseData from './getAPIResponseData';

// 역할 (전체) 가져오기
export const getAllRoles = async () => {
  return await getAPIResponseData<RoleEntity[]>({
    method: 'GET',
    url: API.GET_ALL_ROLES,
  });
};
