import { Suspense } from 'react';
import TeamMemberList from '@components/team/TeamMemberList.tsx';
import TeamSubTitle from '@components/team/TeamSubTitle.tsx';
import TeamEmoji from '@components/team/TeamEmoji.tsx';
import TeamFilter from '@components/team/TeamFilter.tsx';

const TeamPage = () => {
  return (
    <div className='p-8'>
      <div className='mb-4'>
        <TeamSubTitle />
      </div>
      <div className='mb-8'>
        <TeamFilter />
      </div>
      <div className='mb-4'>
        <TeamEmoji />
      </div>
      <Suspense>
        <TeamMemberList />
      </Suspense>
    </div>
  );
};

export default TeamPage;
