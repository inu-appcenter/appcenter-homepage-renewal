import { postSignIn } from '@/apis/signIn';
import SignInLogo from '@/assets/Signin_logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../common/FormInput';

export default function SignInForm() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const [idError, setIdError] = useState(false);
  const [idErrorMsg, setIdErrorMsg] = useState('');
  const [pwdError, setPwdError] = useState(false);
  const [pwdErrorMsg, setPwdErrorMsg] = useState('');

  const validateInputs = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isIdValid = true,
      pwdValid = true;

    // 아이디 유효성 검사
    if (
      !(
        e.currentTarget.elements.namedItem('id') as HTMLInputElement
      )?.value.trim()
    ) {
      setIdError(true);
      setIdErrorMsg('아이디를 입력해주세요.');
      isIdValid = false;
    } else {
      setIdError(false);
      setIdErrorMsg('');
    }

    // 비밀번호 유효성 검사
    if (
      !(
        e.currentTarget.elements.namedItem('password') as HTMLInputElement
      )?.value.trim()
    ) {
      setPwdError(true);
      setPwdErrorMsg('비밀번호를 입력해주세요.');
      pwdValid = false;
    } else {
      setPwdError(false);
      setPwdErrorMsg('');
    }

    if (isIdValid && pwdValid) {
      try {
        const response = await postSignIn({ id: id, password: pwd });
        const { token } = response;
        sessionStorage.setItem('token', token);
        navigate('/');
      } catch (error) {
        console.error('로그인 오류 : ', error);
      }
    }
  };

  return (
    <div className='w-full max-w-xl rounded-lg bg-white p-6 shadow-lg'>
      <div className='mb-4 flex justify-center'>
        <img src={SignInLogo} alt='Sign In Logo' className='h-auto w-32' />
      </div>
      <h1 className='mb-4 text-center text-2xl font-bold'>홈페이지 대시보드</h1>
      <form onSubmit={validateInputs} className='flex flex-col gap-4'>
        <FormInput
          id='id'
          label='Id'
          type='text'
          value={id}
          onChange={(e) => setId(e.target.value)}
          error={idError}
          errorMessage={idErrorMsg}
        />
        <FormInput
          id='password'
          label='Password'
          type='password'
          value={pwd}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPwd(e.target.value)
          }
          error={pwdError}
          errorMessage={pwdErrorMsg}
        />
        <button
          type='submit'
          className='w-full rounded bg-[#1773E0] px-4 py-2 text-white hover:bg-[#135cb8] focus:outline-none focus:ring-0'
        >
          로그인
        </button>
      </form>
    </div>
  );
}
