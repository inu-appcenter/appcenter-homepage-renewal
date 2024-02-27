import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
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
import { PART } from '@constants/common.ts';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { PartParam } from '@type/common.ts';

type FilterTabsProps = {
  tabList: { label: string; path: string }[];
};

const FilterTabs: React.FC<FilterTabsProps> = ({ tabList }) => {
  const { part } = useParams<PartParam>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const navigate = useNavigate();
  const handlePartClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className='hidden sm:block'>
        <Tabs variant='soft-rounded'>
          <TabList>
            {tabList.map(({ label, path }) => (
              <Link key={path} to={`${path}?year=${queryParams.get('year')}`}>
                <Tab>{label}</Tab>
              </Link>
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
            {tabList.map(({ path, label }) => (
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

export default FilterTabs;
