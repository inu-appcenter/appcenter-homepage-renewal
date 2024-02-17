import { MENU } from '@constants/menu.ts';
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  Tabs,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const OurTeamPartList =
  MENU.find(({ label }) => label === 'Our Team')?.children ?? [];

const TeamFilter = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-4'>
        <Tabs variant='soft-rounded'>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
            </MenuList>
          </Menu>
        </Tabs>
        <Tabs variant='soft-rounded'>
          <TabList>
            {OurTeamPartList.map(({ label, path }) => (
              <Link to={path}>
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
