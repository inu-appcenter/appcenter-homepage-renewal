import { deletePhoto } from '@/apis/photo';
import ModalBox from '@/components/common/ModalBox';
import { THEME } from '@/constants/theme';
import { PhotoEntity } from '@/types/photoType';
import BtnBox from '../common/BtnBox';

interface PhotoDeleteModalProps {
  setIsDeleteBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow: PhotoEntity | null;
}

const PhotoDeleteModal = ({
  setIsDeleteBtnClick,
  selectedRow,
}: PhotoDeleteModalProps) => {
  const onDeleteClick = async () => {
    if (selectedRow && selectedRow.id !== null) {
      try {
        await deletePhoto(selectedRow.id);
        setIsDeleteBtnClick(false);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <ModalBox>
      <p className='text-xl font-bold'>
        {selectedRow?.id} 게시글을 삭제하겠습니까?
      </p>
      <div className='flex flex-row justify-center gap-2'>
        <BtnBox text='삭제' color={THEME.COLORS.RED} onClick={onDeleteClick} />
        <BtnBox
          text='취소'
          color={THEME.COLORS.GRAY}
          onClick={() => setIsDeleteBtnClick(false)}
        />
      </div>
    </ModalBox>
  );
};

export default PhotoDeleteModal;
