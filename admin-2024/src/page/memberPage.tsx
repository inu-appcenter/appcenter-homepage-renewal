import BtnBox from '@/components/common/BtnBox';
import TitleBox from '@/components/common/TitleBox';
import MemPostModal from '@/components/member/MemPostModal';
import { CATEGORY } from '@/constants/category';
import MemberPagination from '@/container/member/MemberPagination';
import { useState } from 'react';

const MemberPage = () => {
  const [isPostBtnClick, setIsPostBtnClick] = useState(false);
  const onPostBtnClick = () => {
    setIsPostBtnClick(!isPostBtnClick);
  };
  const [isPatchBtnClick, setIsPatchBtnClick] = useState(false);
  const onPatchBtnClick = () => {
    setIsPatchBtnClick(!isPatchBtnClick);
  };

  return (
    <>
      <TitleBox
        title={CATEGORY.CLUB_MANAGE.MEMBER.title}
        description={CATEGORY.CLUB_MANAGE.MEMBER.description}
      />

      <div className='mt-10 flex flex-col justify-center align-middle'>
        <div className='mb-4 flex flex-row justify-between'>
          <p className='text-xl'>동아리원 목록</p>
          <div className='flex flex-row gap-1'>
            <BtnBox text='등록' onClick={onPostBtnClick} />
            <BtnBox text='수정' color='#16cba7' onClick={onPatchBtnClick} />
            <BtnBox text='삭제' color='#e42626' onClick={onPostBtnClick} />
          </div>
        </div>
        <MemberPagination />
      </div>
      {isPostBtnClick && (
        <MemPostModal
          setIsBtnClick={setIsPostBtnClick}
          isPost={true}
          isPatch={false}
        />
      )}
      {isPatchBtnClick && (
        <MemPostModal
          setIsBtnClick={setIsPatchBtnClick}
          isPost={true}
          isPatch={false}
        />
      )}
    </>
  );
};
export default MemberPage;
