import { deleteFaq } from '@/apis/qna';
import ModalBox from '@/components/common/ModalBox';
import { THEME } from '@/constants/theme';
import { QnaRes } from '@/types/qnaType';
import BtnBox from '../common/BtnBox';

interface QnaDeleteModalProps {
  setIsDeleteBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow: QnaRes | null;
}

const QnaDeleteModal = ({
  setIsDeleteBtnClick,
  selectedRow,
}: QnaDeleteModalProps) => {
  const onDeleteClick = async () => {
    if (selectedRow && selectedRow.id !== null) {
      try {
        await deleteFaq(selectedRow.id);
        setIsDeleteBtnClick(false);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <ModalBox>
      <p className='text-xl font-bold'>해당 QnA 를 삭제하겠습니까?</p>
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

export default QnaDeleteModal;
