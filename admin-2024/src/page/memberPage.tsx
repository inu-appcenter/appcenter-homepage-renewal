import BtnBox from '@/components/common/BtnBox';
import TitleBox from '@/components/common/TitleBox';
import MemDeleteModal from '@/components/member/MemDeleteModal';
import MemPostPatchModal from '@/components/member/MemPostPatchModal';
import MemSearch from '@/components/member/MemSearch';
import { CATEGORY } from '@/constants/category';
import { THEME } from '@/constants/theme';
import MemberPagination from '@/container/member/MemberPagination';
import { MemberEntity } from '@/types/memberType';
import { useState } from 'react';

const MemberPage = () => {
  const [selectedRows, setSelectedRows] = useState<MemberEntity[]>([]);
  const [members, setMembers] = useState<MemberEntity[]>([]);

  const [isPostBtnClick, setIsPostBtnClick] = useState(false);
  const [isPatchBtnClick, setIsPatchBtnClick] = useState(false);
  const [isDeleteBtnClick, setIsDeleteBtnClick] = useState(false);

  const onPostBtnClick = () => {
    setIsPostBtnClick(true);
    setIsPatchBtnClick(false);
  };

  const onPatchBtnClick = () => {
    if (selectedRows.length === 0) {
      alert('수정할 동아리원을 선택해주세요.');
      return;
    }
    if (selectedRows.length > 1) {
      alert('한 명의 동아리원만 선택해주세요.');
      return;
    }
    setIsPatchBtnClick(true);
    setIsPostBtnClick(false);
  };

  const onDeleteBtnClick = () => {
    if (selectedRows.length === 0) {
      alert('삭제할 동아리원을 선택해주세요.');
      return;
    }
    if (selectedRows.length > 1) {
      alert('한 명의 동아리원만 선택해주세요.');
      return;
    }
    setIsDeleteBtnClick(!isPatchBtnClick);
  };

  const handleSearchResult = (searchResults: MemberEntity[]) => {
    setMembers(searchResults);
  };

  return (
    <>
      <TitleBox
        title={CATEGORY.CLUB_MANAGE.MEMBER.title}
        description={CATEGORY.CLUB_MANAGE.MEMBER.description}
      />

      <div className='mt-10 flex flex-col justify-center gap-4 align-middle'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-1'>
            <BtnBox text='등록' onClick={onPostBtnClick} />
            <BtnBox
              text='수정'
              color={THEME.COLORS.GREEN}
              onClick={onPatchBtnClick}
            />
            <BtnBox
              text='삭제'
              color={THEME.COLORS.RED}
              onClick={onDeleteBtnClick}
            />
          </div>
          <MemSearch onSearchResult={handleSearchResult} />
        </div>
        <MemberPagination
          setSelectedRows={setSelectedRows}
          members={members}
          setMembers={setMembers}
        />
      </div>
      {isPostBtnClick && (
        <MemPostPatchModal
          setIsBtnClick={setIsPostBtnClick}
          isPost={true}
          isPatch={false}
        />
      )}
      {isPatchBtnClick && (
        <MemPostPatchModal
          setIsBtnClick={setIsPatchBtnClick}
          isPost={false}
          isPatch={true}
          selectedRow={selectedRows[0]}
        />
      )}
      {isDeleteBtnClick && (
        <MemDeleteModal
          selectedRow={selectedRows[0]}
          setIsDeleteBtnClick={setIsDeleteBtnClick}
        />
      )}
    </>
  );
};
export default MemberPage;
