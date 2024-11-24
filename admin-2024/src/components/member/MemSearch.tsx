import { getAllMember, getSearchMember } from '@/apis/member';
import { MemberEntity } from '@/types/memberType';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';

interface MemSearchProps {
  onSearchResult: (members: MemberEntity[]) => void;
}

const MemSearch = ({ onSearchResult }: MemSearchProps) => {
  const [searchName, setSearchName] = useState('');
  const [allMembers, setAllMembers] = useState<MemberEntity[]>([]);

  useEffect(() => {
    const fetchAllMembers = async () => {
      try {
        const members = await getAllMember();
        setAllMembers(members);
      } catch (error) {
        console.error('전체 동아리원 목록 조회 오류', error);
      }
    };

    fetchAllMembers();
  }, []);

  const handleSearch = async () => {
    if (!searchName.trim()) {
      onSearchResult(allMembers);
      return;
    }

    try {
      const response = await getSearchMember(searchName);
      onSearchResult(response);
    } catch (error) {
      console.error('검색 오류 ', error);
    }
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchName(newValue);

    if (!newValue) {
      onSearchResult(allMembers);
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
export default MemSearch;
