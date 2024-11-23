import { getAlParts } from '@/apis/generation';
import { postFaq } from '@/apis/qna';
import BtnBox from '@/components/common/BtnBox';
import FormInput from '@/components/common/FormInput';
import ModalBox from '@/components/common/ModalBox';
import { THEME } from '@/constants/theme';
import { MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import FormArea from '../common/FormArea';

interface QnaPostModalProps {
  setIsPostBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const QnaPostModal = ({ setIsPostBtnClick }: QnaPostModalProps) => {
  const [part, setPart] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const [questionError, setQuestionError] = useState(false);
  const [answerError, setAnswerError] = useState(false);
  const [questionErrorMsg, setQuestionErrorMsg] = useState('');
  const [answerErrorMsg, setAnswerErrorMsg] = useState('');

  const [parts, setParts] = useState<string[]>([]);
  useEffect(() => {
    const fetchParts = async () => {
      try {
        const parts = await getAlParts();
        setParts(parts.parts);
        if (parts.parts.length > 0) {
          setPart(parts.parts[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchParts();
  }, []);

  const validateInputs = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isQuestionValid = true,
      isAnswerValid = true;

    // 질문 유효성 검사
    if (!question.trim()) {
      setQuestionError(true);
      setQuestionErrorMsg('질문을 입력해주세요.');
      isQuestionValid = false;
    } else {
      setQuestionError(false);
      setQuestionErrorMsg('');
    }

    // 답변 유효성 검사
    if (!answer.trim()) {
      setAnswerError(true);
      setAnswerErrorMsg('답변을 입력해주세요.');
      isAnswerValid = false;
    } else {
      setAnswerError(false);
      setAnswerErrorMsg('');
    }

    if (isQuestionValid && isAnswerValid) {
      try {
        await postFaq({ part, question, answer });
        setIsPostBtnClick(false);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <ModalBox>
      <p className='text-2xl font-bold'>질문 및 답변 추가</p>
      <form
        onSubmit={validateInputs}
        className='flex w-full max-w-lg flex-col gap-4'
      >
        <div className='flex flex-col gap-2'>
          <label className='text-medium font-medium'>파트</label>
          <Select
            id='part'
            className='h-10'
            value={part}
            onChange={(e) => setPart(e.target.value)}
          >
            {parts.map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </Select>
        </div>

        <FormInput
          id='question'
          label='질문'
          type='text'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          error={questionError}
          errorMessage={questionErrorMsg}
        />
        <FormArea
          id='answer'
          label='답변'
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          error={answerError}
          errorMessage={answerErrorMsg}
          rows={3}
        />

        <div className='flex flex-row justify-center gap-2'>
          <BtnBox text='등록' />
          <BtnBox
            text='취소'
            color={THEME.COLORS.GRAY}
            onClick={() => setIsPostBtnClick(false)}
          />
        </div>
      </form>
    </ModalBox>
  );
};

export default QnaPostModal;
