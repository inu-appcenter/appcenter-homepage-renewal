import { Suspense, useMemo } from 'react';
import TeamMemberList from '@components/team/TeamMemberList.tsx';
import Title from '@components/common/Title.tsx';
import { useParams } from 'react-router-dom';
import { PartParam } from '@type/common.ts';
import FirstLetterPointText from '@components/common/FirstLetterPointText.tsx';
import { PART } from '@constants/common.ts';
import { ourTeamList } from '@assets/text/team.ts';

const TeamPage = () => {
  const { part } = useParams<PartParam>();

  const { label, description } = useMemo(
    () =>
      ourTeamList.find(({ label }) => label === PART[part ?? 'android'].label)!,
    [part]
  );

  return (
    <div className='p-8'>
      <div className='mb-8'>
        <Title title='OUR TEAM' />
      </div>
      <div className='flex items-center flex-wrap gap-x-8'>
        <FirstLetterPointText text={label} />
        <p className='text-grayscale-500 font-semibold text-lg'>
          {description}
        </p>
      </div>
      <Suspense>
        <TeamMemberList />
      </Suspense>
    </div>
  );
};

export default TeamPage;
