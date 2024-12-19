import { patchRoles } from '@/apis/role';
import BtnBox from '@/components/common/BtnBox';
import FormInput from '@/components/common/FormInput';
import ModalBox from '@/components/common/ModalBox';
import { THEME } from '@/constants/theme';
import { RoleEntity } from '@/types/roleType';
import { useState } from 'react';

interface RolePatchModalProps {
  setIsPatchBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow: RoleEntity | null;
}

const RolePatchModal = ({
  setIsPatchBtnClick,
  selectedRow,
}: RolePatchModalProps) => {
  const [role, setRole] = useState(selectedRow?.roleName || '');

  const [roleError, setRoleError] = useState(false);
  const [roleErrorMsg, setRoleErrorMsg] = useState('');

  const validateInputs = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isRoleValid = true;

    // 역할 유효성 검사
    if (!role.trim()) {
      setRoleError(true);
      setRoleErrorMsg('역할을 입력해주세요.');
      isRoleValid = false;
    } else {
      setRoleError(false);
      setRoleErrorMsg('');
    }

    if (selectedRow && isRoleValid) {
      try {
        await patchRoles(selectedRow.roleId, role);
        setIsPatchBtnClick(false);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <ModalBox>
      <p className='text-2xl font-bold'>역할 수정</p>
      <form
        onSubmit={validateInputs}
        className='flex w-full max-w-lg flex-col gap-4'
      >
        <FormInput
          id='role'
          label='역할'
          type='text'
          value={role}
          onChange={(e) => setRole(e.target.value)}
          error={roleError}
          errorMessage={roleErrorMsg}
        />
        <div className='flex flex-row justify-center gap-2'>
          <BtnBox text='수정' color={THEME.COLORS.GREEN} />
          <BtnBox
            text='취소'
            color={THEME.COLORS.GRAY}
            onClick={() => setIsPatchBtnClick(false)}
          />
        </div>
      </form>
    </ModalBox>
  );
};

export default RolePatchModal;
