import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import useGetGroupsPublicAllYearsQuery from '@api/query/useGetGroupsPublicAllYearsQuery.ts';
import { Link, useLocation, useParams } from 'react-router-dom';
import { PATH } from '@constants/path.ts';
import { TeamParam } from '@type/common.ts';

const TeamYearDropdown = () => {
  const {
    data: { yearList },
  } = useGetGroupsPublicAllYearsQuery();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { part } = useParams<TeamParam>();

  return (
    <Menu isLazy>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        minWidth={32}
        className='text-start border border-grayscale-100'
        backgroundColor='transparent'
        _active={{
          bg: 'transparent',
        }}
        _hover={{
          bg: 'transparent',
        }}
      >
        {queryParams.get('year')}기
      </MenuButton>
      <MenuList
        borderColor='grayscale.100'
        minWidth={40}
        maxHeight={80}
        className='overflow-scroll'
      >
        {yearList.map((year) => (
          <Link key={year} to={PATH.TEAM(part) + `?year=${year}`}>
            <MenuItem>{year}기</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TeamYearDropdown;
