import { PART } from '@constants/common.ts';
import { PATH } from '@constants/path.ts';
import { Link } from 'react-router-dom';

const partFaqList = [
  {
    part: PART.common.label,
    question: '앱센터는 어떻게 들어가나요?',
    path: PATH.FAQ_DETAIL(PART.common.value),
  },
  {
    part: PART.android.label,
    question: 'Java와 Kotlin중 어떤 언어를 사용하나요?',
    path: PATH.FAQ_DETAIL(PART.android.value),
  },
  {
    part: PART.design.label,
    question: 'Figma, XD 할 줄 알아야 하나요?',
    path: PATH.FAQ_DETAIL(PART.design.value),
  },
  {
    part: PART.ios.label,
    question: '맥북 필수인가요?',
    path: PATH.FAQ_DETAIL(PART.ios.value),
  },
  {
    part: PART.server.label,
    question: 'Node.js Spring중 어떤 것을 사용하나요?',
    path: PATH.FAQ_DETAIL(PART.server.value),
  },
  {
    part: PART.web.label,
    question: 'React 할 줄 알아야 하나요?',
    path: PATH.FAQ_DETAIL(PART.web.value),
  },
];
const PartFaqGrid = () => {
  return (
    <div className='self-center grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
      {partFaqList.map(({ part, question, path }) => (
        <Link to={path} key={path}>
          <div
            key={part}
            className='flex flex-col justify-between gap-y-2 bg-primary-200 rounded-3xl px-6 py-6 md:py-4 h-full'
          >
            <p className='bg-white w-fit px-4 py-1 mb-3 rounded-2xl text-primary-700 font-semibold'>
              {part}
            </p>
            <p className='pl-2 font-medium'>{question}</p>
            <span className='text-xs bg-white rounded-3xl w-fit py-1 px-2 text-primary-700 font-semibold self-end'>
              더보기
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PartFaqGrid;
