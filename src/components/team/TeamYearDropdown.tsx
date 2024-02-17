import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import useGetGroupsPublicAllYearsQuery from '@api/query/useGetGroupsPublicAllYearsQuery.ts';
import { Link } from 'react-router-dom';
import { PATH } from '@constants/path.ts';

const TeamYearDropdown = () => {
  const {
    data: { yearList },
  } = useGetGroupsPublicAllYearsQuery();

  return (
    <Menu isLazy>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList minWidth={40}>
        {yearList.map((year) => (
          <Link key={year} to={PATH.TEAM('android') + '?year=14'}>
            <MenuItem>{year}기</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TeamYearDropdown;
