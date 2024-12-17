import { getAllGroupsMembers, getSearchGroupsMember } from '@/apis/generation';
import { GroupEntity } from '@/types/generationType';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';

interface GenSearchProps {
  onSearchResult: (members: GroupEntity[]) => void;
}

const GenSearch = ({ onSearchResult }: GenSearchProps) => {
  const [searchName, setSearchName] = useState('');
  const [allGroups, setAllGroups] = useState<GroupEntity[]>([]);

  useEffect(() => {
    const fetchAllGroupsMembers = async () => {
      try {
        const groups = await getAllGroupsMembers();
        setAllGroups(groups);
      } catch (error) {
        console.error('전체 동아리원 목록 조회 오류', error);
      }
    };

    fetchAllGroupsMembers();
  }, []);

  const handleSearch = async () => {
    if (!searchName.trim()) {
      onSearchResult(allGroups);
      return;
    }

    try {
      const response = await getSearchGroupsMember(searchName);
      onSearchResult(response);
    } catch (error) {
      console.error('검색 오류 ', error);
    }
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchName(newValue);

    if (!newValue) {
      onSearchResult(allGroups);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='flex items-center justify-center gap-2 bg-white'>
      <input
        type='search'
        placeholder='이름으로 검색'
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className='rounded-lg bg-white p-1 outline outline-2 outline-gray-200 focus:outline-gray-500'
      />
      <SearchIcon onClick={handleSearch} className='cursor-pointer' />
    </div>
  );
};
export default GenSearch;
