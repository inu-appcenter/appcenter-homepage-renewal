import { useSuspenseQuery } from '@tanstack/react-query';
import { PART } from '@constants/common.ts';
import QUERY_KEY from '@api/constants/queryKey.ts';
import { getGroupsPublicAll } from '@api/api/groups.ts';

const useGetGroupsPublicAllQuery = ({
  year,
  part,
}: {
  year: number;
  part: keyof typeof PART;
}) => {
  return useSuspenseQuery({
    queryFn: () => getGroupsPublicAll(year, part),
    queryKey: QUERY_KEY.GROUPS_PUBLIC_ALL(year, part),
  });
};

export default useGetGroupsPublicAllQuery;
