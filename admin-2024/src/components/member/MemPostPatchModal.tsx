import { patchMember, postMember } from '@/apis/member';
import BtnBox from '@/components/common/BtnBox';
import FormInput from '@/components/common/FormInput';
import ModalBox from '@/components/common/ModalBox';
import { THEME } from '@/constants/theme';
import { MemberEntity } from '@/types/memberType';
import { useState } from 'react';
import FormArea from '../common/FormArea';

interface MemPostPatchModalProps {
  isPost: boolean;
  isPatch: boolean;
  selectedRow?: MemberEntity | null;
  setIsBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const MemPostPatchModal = ({
  isPost,
  isPatch,
  selectedRow,
  setIsBtnClick,
}: MemPostPatchModalProps) => {
  const [name, setName] = useState(selectedRow?.name || '');
  const [phone, setPhone] = useState(selectedRow?.phoneNumber || '');
  const [email, setEmail] = useState(selectedRow?.email || '');
  const [git, setGit] = useState(selectedRow?.gitRepositoryLink || '');
  const [profile, setProfile] = useState(selectedRow?.profileImage || '');
  const [blog, setBlog] = useState(selectedRow?.blogLink || '');
  const [studentId, setStudentId] = useState(selectedRow?.studentNumber || '');
  const [dept, setDept] = useState(selectedRow?.department || '');
  const [description, setDescription] = useState(
    selectedRow?.description || ''
  );
  const [behance, setBehance] = useState(selectedRow?.behanceLink || '');

  const [nameError, setNameError] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState('');
  const validateInputs = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isNameValid = true;

    if (!name.trim()) {
      setNameError(true);
      setNameErrorMsg('이름을 입력해주세요.');
      isNameValid = false;
    } else {
      setNameError(false);
      setNameErrorMsg('');
    }

    if (isNameValid) {
      try {
        // 동아리원 최초 등록
        if (isPost && !isPatch) {
          await postMember({
            name: name,
            email: email,
            blogLink: blog,
            behanceLink: behance,
            department: dept,
            description: description,
            gitRepositoryLink: git,
            phoneNumber: phone,
            profileImage: profile,
            studentNumber: studentId,
          });
        }

        // 기존 동아리원 수정
        if (selectedRow?.member_id !== undefined) {
          await patchMember(selectedRow.member_id, {
            name: name,
            email: email,
            blogLink: blog,
            behanceLink: behance,
            department: dept,
            description: description,
            gitRepositoryLink: git,
            phoneNumber: phone,
            profileImage: profile,
            studentNumber: studentId,
          });
        }

        setIsBtnClick(false);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <ModalBox>
      {isPost && !isPatch && (
        <p className='text-2xl font-bold'>동아리원 등록</p>
      )}
      {!isPost && isPatch && (
        <p className='text-2xl font-bold'>동아리원 수정</p>
      )}
      <form
        onSubmit={validateInputs}
        className='flex w-full max-w-lg flex-col gap-4'
      >
        <FormInput
          id='name'
          label='이름'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={nameError}
          errorMessage={nameErrorMsg}
        />
        <div className='flex w-full gap-4'>
          <FormInput
            id='phone'
            label='전화번호'
            type='text'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <FormInput
            id='email'
            label='이메일'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex w-full gap-4'>
          <FormInput
            id='git'
            label='Git URL'
            type='text'
            value={git}
            onChange={(e) => setGit(e.target.value)}
          />
          <FormInput
            id='profile'
            label='Git 프로필 이미지 URL'
            type='text'
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
          />
        </div>
        <div className='flex w-full gap-4'>
          <FormInput
            id='blog'
            label='블로그 URL'
            type='text'
            value={blog}
            onChange={(e) => setBlog(e.target.value)}
          />
          <FormInput
            id='behance'
            label='비헨스 URL'
            type='text'
            value={behance}
            onChange={(e) => setBehance(e.target.value)}
          />
        </div>
        <div className='flex w-full gap-4'>
          <FormInput
            id='studentId'
            label='학번'
            type='number'
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
          <FormInput
            id='department'
            label='전공'
            type='text'
            value={dept}
            onChange={(e) => setDept(e.target.value)}
          />
        </div>
        <FormArea
          id='description'
          label='자기소개'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
        />
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
    </ModalBox>
  );
};

export default MemPostPatchModal;
