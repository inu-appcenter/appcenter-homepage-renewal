import { getAllParts } from '@/apis/generation';
import { patchFaq } from '@/apis/qna';
import BtnBox from '@/components/common/BtnBox';
import FormInput from '@/components/common/FormInput';
import ModalBox from '@/components/common/ModalBox';
import { THEME } from '@/constants/theme';
import { QnaRes } from '@/types/qnaType';
import { MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import FormArea from '../common/FormArea';

interface QnaPatchModalProps {
  setIsPatchBtnClick: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow: QnaRes | null;
}

const QnaPatchModal = ({
  setIsPatchBtnClick,
  selectedRow,
}: QnaPatchModalProps) => {
  const [part, setPart] = useState('');
  const [question, setQuestion] = useState(selectedRow?.question || '');
  const [answer, setAnswer] = useState(selectedRow?.answer || '');

  const [questionError, setQuestionError] = useState(false);
  const [answerError, setAnswerError] = useState(false);
  const [questionErrorMsg, setQuestionErrorMsg] = useState('');
  const [answerErrorMsg, setAnswerErrorMsg] = useState('');

  const [parts, setParts] = useState<string[]>([]);
  useEffect(() => {
    const fetchParts = async () => {
      try {
        const parts = await getAllParts();
        setParts(parts.parts);
        if (selectedRow) setPart(selectedRow?.part);
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

    if (selectedRow && isQuestionValid && isAnswerValid) {
      try {
        await patchFaq(selectedRow.id, { part, question, answer });
        setIsPatchBtnClick(false);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <ModalBox>
      <p className='text-2xl font-bold'>질문 및 답변 수정</p>
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

export default QnaPatchModal;
