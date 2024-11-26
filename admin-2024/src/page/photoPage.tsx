import BtnBox from '@/components/common/BtnBox';
import TitleBox from '@/components/common/TitleBox';
import PhotoDeleteModal from '@/components/photo/PhotoDeleteModal';
import PhotoPostPatchModal from '@/components/photo/PhotoPostPatchModal';
import { CATEGORY } from '@/constants/category';
import { THEME } from '@/constants/theme';
import PhotoPagination from '@/container/photo/PhotoPagination';
import { PhotoEntity } from '@/types/photoType';
import { useState } from 'react';

const PhotoPage = () => {
  const [selectedRows, setSelectedRows] = useState<PhotoEntity[]>([]);
  const [photos, setPhotos] = useState<PhotoEntity[]>([]);

  const [isPostBtnClick, setIsPostBtnClick] = useState(false);
  const [isPatchBtnClick, setIsPatchBtnClick] = useState(false);
  const [isDeleteBtnClick, setIsDeleteBtnClick] = useState(false);

  const onPostBtnClick = () => {
    setIsPostBtnClick(true);
    setIsPatchBtnClick(false);
  };

  const onPatchBtnClick = () => {
    if (selectedRows.length === 0) {
      alert('수정할 게시글을 선택해주세요.');
      return;
    }
    if (selectedRows.length > 1) {
      alert('한 개의 게시글만 선택해주세요.');
      return;
    }
    setIsPatchBtnClick(true);
    setIsPostBtnClick(false);
  };

  const onDeleteBtnClick = () => {
    if (selectedRows.length === 0) {
      alert('삭제할 게시글을 선택해주세요.');
      return;
    }
    if (selectedRows.length > 1) {
      alert('한 개의 게시글만 선택해주세요.');
      return;
    }
    setIsDeleteBtnClick(!isPatchBtnClick);
  };

  return (
    <>
      <TitleBox
        title={CATEGORY.DASGBOARD.PHOTO_BOARD.title}
        description={CATEGORY.DASGBOARD.PHOTO_BOARD.description}
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
        <PhotoPagination
          setSelectedRows={setSelectedRows}
          photos={photos}
          setPhotos={setPhotos}
        />
      </div>
      {isPostBtnClick && (
        <PhotoPostPatchModal
          setIsBtnClick={setIsPostBtnClick}
          isPost={true}
          isPatch={false}
        />
      )}
      {isPatchBtnClick && (
        <PhotoPostPatchModal
          setIsBtnClick={setIsPatchBtnClick}
          isPost={false}
          isPatch={true}
          selectedRow={selectedRows[0]}
        />
      )}
      {isDeleteBtnClick && (
        <PhotoDeleteModal
          selectedRow={selectedRows[0]}
          setIsDeleteBtnClick={setIsDeleteBtnClick}
        />
      )}
    </>
  );
};
export default PhotoPage;
