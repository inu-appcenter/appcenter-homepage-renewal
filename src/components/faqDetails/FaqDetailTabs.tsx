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
import { MENU } from '@constants/menu.ts';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PartParam } from '@type/common.ts';
import { PART } from '@constants/common.ts';
import { ChevronDownIcon } from '@chakra-ui/icons';

const FaqPartList = MENU.find(({ label }) => label === 'FAQ')?.children ?? [];

const FaqDetailTabs = () => {
  const { part } = useParams<PartParam>();
  const navigate = useNavigate();
  const handlePartClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className='hidden sm:block'>
        <Tabs>
          <TabList
            border='none'
            justifyContent='space-between'
            flexWrap='wrap'
            className='hidden gap-4'
          >
            {FaqPartList.map(({ path, label }) => (
              <Tab
                key={path}
                border='1px solid transparent'
                color='grayscale.500'
                className='font-bold rounded-3xl shadow-md aria-selected:text-primary-700'
              >
                <Link to={path}>{label}</Link>
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </div>

      <div className='relative block sm:hidden w-40 self-end'>
        <Menu>
          <MenuButton
            as={Button}
            backgroundColor='transparent'
            _active={{
              bg: 'transparent',
            }}
            _hover={{
              bg: 'transparent',
            }}
            className='self-end px-4 py-2 text-start w-40 rounded-md border border-grayscale-100 font-semibold'
            rightIcon={<ChevronDownIcon />}
          >
            {PART[part ?? 'android'].label}
          </MenuButton>
          <MenuList borderColor='grayscale.100' minWidth='140px'>
            {FaqPartList.map(({ path, label }) => (
              <MenuItem key={path} onClick={() => handlePartClick(path)}>
                {label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
    </>
  );
};

export default FaqDetailTabs;
