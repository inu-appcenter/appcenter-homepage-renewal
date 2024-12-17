import { patchGroups, postGroups } from '@/apis/generation';
import BtnBox from '@/components/common/BtnBox';
import ModalBox from '@/components/common/ModalBox';
import { THEME } from '@/constants/theme';
import { GroupEntity } from '@/types/generationType';
import { RoleEntity } from '@/types/roleType';
import { useState } from 'react';
import { MenuItem, Select } from '@mui/material';
import FindMembersModal from './FindMembersModal';

interface GenPostPatchModalProps {
  isPost: boolean;
  isPatch: boolean;
  selectedRow?: GroupEntity | null;
  setIsBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
  partList: string[];
  yearList: string[];
  roleList: RoleEntity[];
}

const GenPostPatchModal = ({
  isPost,
  isPatch,
  selectedRow,
  setIsBtnClick,
  partList,
  yearList,
  roleList,
}: GenPostPatchModalProps) => {
  const [postMemberId, setPostMemberId] = useState(0);
  const [postMemberName, setPostMemberName] = useState('');
  const groupId = selectedRow?.group_id || 0;
  const [selectedPart, setPart] = useState(selectedRow?.part || 'Select Part');
  const [selectedYear, setSelectedYear] = useState(
    selectedRow?.year || 'Select Year'
  );
  const [selectedRole, setSelectedRole] = useState(
    selectedRow?.role || 'Select Role'
  );
  const [showMembersModal, setShowMembersModal] = useState(false);

  const validateInputs = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      selectedPart === 'Select Part' ||
      selectedYear === 'Select Year' ||
      selectedRole === 'Select Role'
    ) {
      alert('모든 항목을 선택해주세요.');
      return;
    }

    const role_id = roleList.find(
      (itme) => itme.roleName === selectedRole
    )?.roleId;
    if (role_id === undefined) {
      alert('잘못된 role');
      return;
    }

    const year = Number(selectedYear);
    if (isNaN(year)) {
      alert('잘못된 year');
      return;
    }

    try {
      // 동아리원 편성 최초 등록
      if (isPost && !isPatch) {
        await postGroups(postMemberId, role_id, { part: selectedPart, year });
      }

      // 기존 동아리원 편성 수정
      if (selectedRow?.group_id !== undefined) {
        await patchGroups(groupId, role_id, { part: selectedPart, year });
      }

      setIsBtnClick(false);
      alert('동아리원 편성 성공');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalBox>
      {isPost && !isPatch && (
        <p className='text-2xl font-bold'>동아리원 그룹 편성 등록</p>
      )}
      {!isPost && isPatch && (
        <p className='text-2xl font-bold'>동아리원 그룹 편성 수정</p>
      )}
      <form
        onSubmit={validateInputs}
        className='flex w-full max-w-lg flex-col gap-4'
      >
        {isPost && !isPatch && (
          <div className='flex items-center gap-4'>
            <p>등록 대상:</p>
            <span className='font-bold'>
              {postMemberName || '대상을 선택해주세요'}
            </span>
            <button
              className='rounded-2xl bg-slate-200 pb-1 pl-4 pr-4 pt-1'
              onClick={() => setShowMembersModal(true)}
              type='button'
            >
              동아리원 선택
            </button>
          </div>
        )}
        {!isPost && isPatch && (
          <p>
            수정 대상:
            <span className='font-bold'>{selectedRow?.member}</span>
          </p>
        )}
        <Select
          id='role-modal'
          className='h-10'
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          {[...['Select Role'], ...roleList.map((role) => role.roleName)].map(
            (p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            )
          )}
        </Select>
        <Select
          id='part-modal'
          className='h-10'
          value={selectedPart}
          onChange={(e) => setPart(e.target.value)}
        >
          {[...['Select Part'], ...partList].map((p) => (
            <MenuItem key={p} value={p}>
              {p}
            </MenuItem>
          ))}
        </Select>
        <Select
          id='year-modal'
          className='h-10'
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {[...['Select Year'], ...yearList].map((p) => (
            <MenuItem key={p} value={p}>
              {p}
            </MenuItem>
          ))}
        </Select>
        <div className='flex flex-row justify-center gap-2'>
          {isPost && <BtnBox text='등록' />}
          {isPatch && <BtnBox text='수정' color={THEME.COLORS.GREEN} />}
          <BtnBox
            text='취소'
            color={THEME.COLORS.GRAY}
            onClick={() => {
              setIsBtnClick(false);
            }}
          />
        </div>
      </form>
      {showMembersModal && (
        <FindMembersModal
          setPostMemberId={setPostMemberId}
          setPostMemberName={setPostMemberName}
          handleClose={() => setShowMembersModal(false)}
        />
      )}
    </ModalBox>
  );
};

export default GenPostPatchModal;
