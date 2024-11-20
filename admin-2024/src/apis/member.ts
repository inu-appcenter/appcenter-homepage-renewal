import { API } from '@/constants/api';
import { MemberEntity, MemberPlayload } from '@/types/memberType';
import getAPIResponseData from './getAPIResponseData';

// 동아리원(1명) 등록
export const postMember = async (memData: MemberPlayload) => {
  return await getAPIResponseData<MemberPlayload>({
    method: 'POST',
    url: API.MEMBERS,
    data: memData,
  });
};

// 동아리원(1명) 수정
export const patchMember = async (memData: MemberPlayload) => {
  return await getAPIResponseData<MemberPlayload>({
    method: 'POST',
    url: API.MEMBERS,
    data: memData,
  });
};

// 동아리원(1명) 삭제
export const deleteMember = async (memId: number) => {
  return await getAPIResponseData<{ memId: number }>({
    method: 'DELETE',
    url: API.MEMBERS_ID(memId),
  });
};

// 이름으로 동아리원ID 찾기
export const getSearchMember = async (name: string) => {
  return await getAPIResponseData<MemberEntity[]>({
    method: 'GET',
    url: API.MEMBERS_NAME(name),
  });
};

// 동아리원(전체) 정보 가져오기
export const getAllMember = async () => {
  return await getAPIResponseData<MemberEntity[]>({
    method: 'GET',
    url: API.ALL_MEMBERS,
  });
};
