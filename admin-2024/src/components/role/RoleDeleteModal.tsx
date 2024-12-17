import { deleteRoles } from '@/apis/role';
import ModalBox from '@/components/common/ModalBox';
import { THEME } from '@/constants/theme';
import { RoleEntity } from '@/types/roleType';
import BtnBox from '../common/BtnBox';

interface RoleDeleteModalProps {
  setIsDeleteBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow: RoleEntity | null;
}

const RoleDeleteModal = ({
  setIsDeleteBtnClick,
  selectedRow,
}: RoleDeleteModalProps) => {
  const onDeleteClick = async () => {
    if (selectedRow && selectedRow.roleId !== null) {
      try {
        await deleteRoles(selectedRow.roleId);
        setIsDeleteBtnClick(false);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <ModalBox>
      <p className='text-xl font-bold'>해당 역할을 삭제하겠습니까?</p>
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

export default RoleDeleteModal;
