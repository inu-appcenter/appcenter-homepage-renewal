import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { MENU } from '@constants/menu.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { PartParam } from '@type/common.ts';
import { PART } from '@constants/common.ts';
import { ChevronDownIcon } from '@chakra-ui/icons';
import FilterTabs from '@components/common/FilterTabs.tsx';

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
        <FilterTabs tabList={FaqPartList} />
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
