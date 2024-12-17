import { API } from '@/constants/api';
import { RoleEntity } from '@/types/roleType';
import getAPIResponseData from './getAPIResponseData';

// 역할 (1개) 등록
export const postRoles = async (roleName: string) => {
  return await getAPIResponseData({
    method: 'POST',
    url: API.ROLES,
    data: { roleName: roleName },
  });
};

// 역할 (1개) 수정
export const patchRoles = async (id: number, roleName: string) => {
  return await getAPIResponseData({
    method: 'PATCH',
    url: API.ROLES,
    data: { roleName: roleName },
    params: { id },
  });
};

// 역할 (전체) 가져오기
export const getAllRoles = async () => {
  return await getAPIResponseData<RoleEntity[]>({
    method: 'GET',
    url: API.GET_ALL_ROLES,
  });
};

// 역할 (1개) 삭제
export const deleteRoles = async (id: number) => {
  return await getAPIResponseData({
    method: 'DELETE',
    url: API.ROLES_ID(id),
  });
};
