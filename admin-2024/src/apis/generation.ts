import { API } from '@/constants/api';
import {
  PartEntity,
  GroupEntity,
  GroupPayload,
  YearEntity,
} from '@/types/generationType';
import getAPIResponseData from './getAPIResponseData';

// 그룹 멤버 (1명) 편성
export const postGroups = async (
  member_id: number,
  role_id: number,
  groupData: GroupPayload
) => {
  return await getAPIResponseData<GroupPayload>({
    method: 'POST',
    url: API.GROUPS,
    data: groupData,
    params: { member_id, role_id },
  });
};

// 그룹 멤버 (1명) 수정
export const patchGroups = async (
  groupId: number,
  roleId: number,
  groupData: GroupPayload
) => {
  return await getAPIResponseData<GroupPayload>({
    method: 'PATCH',
    url: API.GROUPS,
    data: groupData,
    params: { groupId, roleId },
  });
};

// 전체 파트 목록 가져오기
export const getAllParts = async () => {
  return await getAPIResponseData<PartEntity>({
    method: 'GET',
    url: API.ALL_PARTS,
  });
};

// 전체 기수 목록 가져오기
export const getAllYears = async () => {
  return await getAPIResponseData<YearEntity>({
    method: 'GET',
    url: API.ALL_GROUPS_YEARS,
  });
};

// 그룹 멤버 (전체) 조회
export const getAllGroupsMembers = async (year?: number, part?: string) => {
  return await getAPIResponseData<GroupEntity[]>({
    method: 'GET',
    url: API.ALL_GROUPS_MEM,
    params: { year, part },
  });
};

// 동아리원 이름으로 소속된 그룹들 찾기
export const getSearchGroupsMember = async (name: string) => {
  return await getAPIResponseData<GroupEntity[]>({
    method: 'GET',
    url: API.GROUPS_MEM_NAME(name),
  });
};

// 그룹 멤버 (1명) 삭제
export const deleteGroupMember = async (id: number) => {
  return await getAPIResponseData({
    method: 'DELETE',
    url: API.DELETE_GROUPS_MEM(id),
  });
};
