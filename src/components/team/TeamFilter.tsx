import { MENU } from '@constants/menu.ts';
import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import TeamYearDropdown from '@components/team/TeamYearDropdown.tsx';
import { Suspense } from 'react';

const OurTeamPartList =
  MENU.find(({ label }) => label === 'Our Team')?.children ?? [];

const TeamFilter = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-4'>
        <Tabs variant='soft-rounded'>
          <Suspense>
            <TeamYearDropdown />
          </Suspense>
        </Tabs>
        <Tabs variant='soft-rounded'>
          <TabList>
            {OurTeamPartList.map(({ label, path }) => (
              <Link key={path} to={`${path}?year=${queryParams.get('year')}`}>
                <Tab>{label}</Tab>
              </Link>
            ))}
          </TabList>
        </Tabs>
      </div>
    </div>
  );
};

export default TeamFilter;
