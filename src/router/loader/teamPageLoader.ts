import { PART } from '@constants/common.ts';
import { Params, redirect } from 'react-router-dom';
import { PATH } from '@constants/path.ts';
import { PartParam } from '@type/common.ts';

const teamPageLoader = ({ params }: { params: Params }) => {
  const { part } = params as PartParam;
  const teamList = Object.keys(PART).filter((part) => part !== 'common');

  if (!teamList.includes(part)) return redirect(PATH.HOME());
  return null;
};

export default teamPageLoader;
