import BtnBox from '@/components/common/BtnBox';
import TitleBox from '@/components/common/TitleBox';
import QnaPostModal from '@/components/qna/QnaPostModal';
import QnaTable from '@/components/qna/QnaTable';
import { CATEGORY } from '@/constants/category';
import { useState } from 'react';

const QnAPage = () => {
  const [isPostBtnClick, setIsPostBtnClick] = useState(false);
  const onPostBtnClick = () => {
    setIsPostBtnClick(!isPostBtnClick);
  };

  return (
    <>
      <TitleBox
        title={CATEGORY.DASGBOARD.FAQ.title}
        description={CATEGORY.DASGBOARD.FAQ.description}
      />
      <div className='mt-10 flex flex-col justify-center align-middle'>
        <div className='mb-4 flex flex-row justify-between'>
          <p className='text-xl'>질문 및 답변 목록</p>
          <div className='flex flex-row gap-1'>
            <BtnBox text='등록' onClick={onPostBtnClick} />
          </div>
        </div>
        <QnaTable />
      </div>
      {isPostBtnClick && <QnaPostModal setIsPostBtnClick={setIsPostBtnClick} />}
    </>
  );
};
export default QnAPage;
