import { deleteGroupMember } from '@/apis/generation';
import ModalBox from '@/components/common/ModalBox';
import { THEME } from '@/constants/theme';
import { GroupEntity } from '@/types/generationType';
import BtnBox from '../common/BtnBox';

interface GenDeleteModalProps {
  setIsDeleteBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow: GroupEntity | null;
}

const MemDeleteModal = ({
  setIsDeleteBtnClick,
  selectedRow,
}: GenDeleteModalProps) => {
  const onDeleteClick = async () => {
    if (selectedRow && selectedRow.group_id !== null) {
      try {
        await deleteGroupMember(selectedRow.group_id);
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
        {selectedRow?.member}님을 삭제하겠습니까?
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

export default MemDeleteModal;
