import useGetGroupsPublicAllQuery from '@api/query/useGetGroupsPublicAllQuery.ts';
import { useParams } from 'react-router-dom';
import { PartParam } from '@type/common.ts';

const TeamMemberList = () => {
  const { part } = useParams<PartParam>();
  const { data } = useGetGroupsPublicAllQuery({ part: part });

  console.log(data);
  return <div></div>;
};

export default TeamMemberList;
