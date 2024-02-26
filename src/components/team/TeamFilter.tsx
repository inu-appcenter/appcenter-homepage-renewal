import { MENU } from '@constants/menu.ts';
import { Tabs } from '@chakra-ui/react';
import TeamYearDropdown from '@components/team/TeamYearDropdown.tsx';
import { Suspense } from 'react';
import FilterTabs from '@components/common/FilterTabs.tsx';

const OurTeamPartList =
  MENU.find(({ label }) => label === 'Our Team')?.children ?? [];

const TeamFilter = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-4'>
        <Tabs variant='soft-rounded'>
          <Suspense>
            <TeamYearDropdown />
          </Suspense>
        </Tabs>
        <FilterTabs tabList={OurTeamPartList} />
      </div>
    </div>
  );
};

export default TeamFilter;
