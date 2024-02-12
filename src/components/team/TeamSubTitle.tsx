import FirstLetterPointText from '@components/common/FirstLetterPointText.tsx';
import { useParams } from 'react-router-dom';
import { PartParam } from '@type/common.ts';
import { useMemo } from 'react';
import { ourTeamList } from '@assets/text/team.ts';
import { PART } from '@constants/common.ts';

const TeamSubTitle = () => {
  const { part } = useParams<PartParam>();

  const { label, description } = useMemo(
    () =>
      ourTeamList.find(({ label }) => label === PART[part ?? 'android'].label),
    [part]
  );

  return (
    <div className='flex items-center flex-wrap gap-x-8'>
      <FirstLetterPointText text={label} />
      <p className='text-grayscale-500 font-semibold text-lg'>{description}</p>
    </div>
  );
};

export default TeamSubTitle;
