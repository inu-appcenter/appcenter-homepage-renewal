import {useSuspenseQuery} from '@tanstack/react-query';
import QUERY_KEY from '../constants/queryKey.ts';
import {getGroupsPublicAll} from '../api/groups.ts';
import {Team} from '../../types/common.ts';

const useGetGroupsPublicAllQuery = ({
  year,
  part,
}: {
  year?: number;
  part?: Team;
}) => {
  return useSuspenseQuery({
    queryFn: () => getGroupsPublicAll(year, part),
    queryKey: QUERY_KEY.GROUPS_PUBLIC_ALL(year, part),
  });
};

export default useGetGroupsPublicAllQuery;
