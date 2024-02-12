import { PART } from '@constants/common.ts';
import { getApiData } from '@api/api/axios.ts';
import API from '@api/constants/api.ts';
import { GroupsPublicAllResponse } from '@api/dto/groups.ts';

export const getGroupsPublicAll = (year: number, part: keyof typeof PART) => {
  return getApiData<GroupsPublicAllResponse>({
    method: 'GET',
    url: API.GROUPS_PUBLIC_ALL({ part: part, year: year }),
  });
};
