import {getApiData} from './axios.ts';
import API from '../constants/api.ts';
import {GroupsPublicAllResponse, GroupsPublicAllYearsResponse} from '../dto/groups.ts';
import {Team} from '../../types/common.ts';

export const getGroupsPublicAll = (year?: number, part?: Team) => {
  return getApiData<GroupsPublicAllResponse>({
    method: 'GET',
    url: API.GROUPS_PUBLIC_ALL({ part: part, year: year }),
  });
};

export const getGroupsPublicAllYears = () => {
  return getApiData<GroupsPublicAllYearsResponse>({
    method: 'GET',
    url: API.GROUPS_PUBLIC_ALL_YEARS,
  });
};
