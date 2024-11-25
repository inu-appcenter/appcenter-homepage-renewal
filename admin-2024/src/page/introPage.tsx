import BtnBox from '@/components/common/BtnBox';
import TitleBox from '@/components/common/TitleBox';
import IntroDeleteModal from '@/components/intro/IntroDeleteModal';
import IntroPostPatchModal from '@/components/intro/IntroPostPatchModal';
import { CATEGORY } from '@/constants/category';
import { THEME } from '@/constants/theme';
import IntroPagination from '@/container/intro/IntroPagination';
import { IntroductionEntity } from '@/types/introType';
import { useState } from 'react';

const IntroPage = () => {
  const [selectedRows, setSelectedRows] = useState<IntroductionEntity[]>([]);
  const [introductions, setIntroductions] = useState<IntroductionEntity[]>([]);

  const [isPostBtnClick, setIsPostBtnClick] = useState(false);
  const [isPatchBtnClick, setIsPatchBtnClick] = useState(false);
  const [isDeleteBtnClick, setIsDeleteBtnClick] = useState(false);

  const onPostBtnClick = () => {
    setIsPostBtnClick(true);
    setIsPatchBtnClick(false);
  };

  const onPatchBtnClick = () => {
    if (selectedRows.length === 0) {
      alert('수정할 앱을 선택해주세요.');
      return;
    }
    if (selectedRows.length > 1) {
      alert('한 개의 앱만 선택해주세요.');
      return;
    }
    setIsPatchBtnClick(true);
    setIsPostBtnClick(false);
  };

  const onDeleteBtnClick = () => {
    if (selectedRows.length === 0) {
      alert('삭제할 앱을 선택해주세요.');
      return;
    }
    if (selectedRows.length > 1) {
      alert('한 개의 앱만 선택해주세요.');
      return;
    }
    setIsDeleteBtnClick(!isPatchBtnClick);
  };

  return (
    <>
      <TitleBox
        title={CATEGORY.DASGBOARD.APP.title}
        description={CATEGORY.DASGBOARD.APP.description}
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
        </div>
        <IntroPagination
          setSelectedRows={setSelectedRows}
          introductions={introductions}
          setIntroductions={setIntroductions}
        />
      </div>
      {isPostBtnClick && (
        <IntroPostPatchModal
          setIsBtnClick={setIsPostBtnClick}
          isPost={true}
          isPatch={false}
        />
      )}
      {isPatchBtnClick && (
        <IntroPostPatchModal
          setIsBtnClick={setIsPatchBtnClick}
          isPost={false}
          isPatch={true}
          selectedRow={selectedRows[0]}
        />
      )}
      {isDeleteBtnClick && (
        <IntroDeleteModal
          selectedRow={selectedRows[0]}
          setIsDeleteBtnClick={setIsDeleteBtnClick}
        />
      )}
    </>
  );
};
export default IntroPage;
