import { PART } from '@constants/common.ts';
import { Params, redirect } from 'react-router-dom';
import { PATH } from '@constants/path.ts';
import { PartParam } from '@type/common.ts';
import { getCurrentGeneration } from '@/utils/date.ts';

const teamPageLoader = ({
  request: { url },
  params,
}: {
  request: Request;
  params: Params;
}) => {
  const { part } = params as PartParam;
  const teamList = Object.keys(PART).filter((part) => part !== 'common');

  const { searchParams } = new URL(url);
  const currentGeneration = searchParams.get('year');

  if (!currentGeneration)
    return redirect(`${PATH.TEAM(part)}?year=${getCurrentGeneration()}`);

  if (!teamList.includes(part)) return redirect(PATH.HOME());
  return null;
};

export default teamPageLoader;
