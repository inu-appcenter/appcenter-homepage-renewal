import { getSearchMember } from '@/apis/member';
import BtnBox from '@/components/common/BtnBox';
import ModalBox from '@/components/common/ModalBox';
import { THEME } from '@/constants/theme';
import { MemberEntity } from '@/types/memberType';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

interface FindMembersModalProps {
  setPostMemberId: (postMemberId: number) => void;
  setPostMemberName: (postMemberName: string) => void;
  handleClose: () => void;
}

const FindMembersModal = ({
  setPostMemberId,
  setPostMemberName,
  handleClose,
}: FindMembersModalProps) => {
  const [searchName, setSearchName] = useState('');
  const [members, setMembers] = useState<MemberEntity[]>([]);

  const handleSearch = async () => {
    if (!searchName.trim()) {
      setMembers([]);
      return;
    }

    try {
      const response = await getSearchMember(searchName);
      setMembers(response);
    } catch (error) {
      console.error('검색 오류 ', error);
    }
  };

  const handleSelectMember = (member: MemberEntity) => {
    setPostMemberId(member.member_id);
    setPostMemberName(member.name);
    handleClose();
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchName(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <ModalBox>
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
      <div className='mt-4 max-h-60 overflow-y-auto'>
        {members.map((member) => (
          <div
            key={member.member_id}
            className='flex cursor-pointer justify-between gap-4 border-b p-2 hover:bg-gray-200'
            onClick={() => handleSelectMember(member)}
          >
            <span className='text-gray-500'>ID: {member.member_id}</span>
            <span>{member.name}</span>
            <span>{member.studentNumber}</span>
          </div>
        ))}
      </div>

      <div className='mt-4 flex justify-center'>
        <BtnBox text='닫기' color={THEME.COLORS.GRAY} onClick={handleClose} />
      </div>
    </ModalBox>
  );
};
export default FindMembersModal;
