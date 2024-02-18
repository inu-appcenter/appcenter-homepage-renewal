import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import useGetGroupsPublicAllYearsQuery from '@api/query/useGetGroupsPublicAllYearsQuery.ts';
import { Link, useLocation } from 'react-router-dom';
import { PATH } from '@constants/path.ts';

const TeamYearDropdown = () => {
  const {
    data: { yearList },
  } = useGetGroupsPublicAllYearsQuery();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  return (
    <Menu isLazy>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        minWidth={32}
        className='text-start'
      >
        {queryParams.get('year')}기
      </MenuButton>
      <MenuList minWidth={40}>
        {yearList.map((year) => (
          <Link key={year} to={PATH.TEAM('android') + `?year=${year}`}>
            <MenuItem>{year}기</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TeamYearDropdown;
