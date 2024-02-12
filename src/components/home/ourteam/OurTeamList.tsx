import { Link } from 'react-router-dom';
import ArrowRight from '@assets/svg/arrow_right.svg';
import { PART } from '@constants/common.ts';
import { PATH } from '@constants/path.ts';
import FirstLetterPointText from '@components/common/FirstLetterPointText.tsx';

const ourTeamList = [
  {
    label: PART.android.label,
    description: '안드로이드 운영체제에서 작동하는 앱을 구현합니다',
    path: PATH.TEAM(PART.android.value),
  },
  {
    label: PART.design.label,
    description: '앱을 디자인하고 서비스를 설계합니다',
    path: PATH.TEAM(PART.design.value),
  },
  {
    label: PART.ios.label,
    description: 'iOS 운영체제에서 작동하는 앱을 구현합니다',
    path: PATH.TEAM(PART.ios.value),
  },
  {
    label: PART.server.label,
    description: '서버를 구현합니다.',
    path: PATH.TEAM(PART.server.value),
  },
  {
    label: PART.web.label,
    description: '웹환경에 맞춘 서비스를 구현합니다',
    path: PATH.TEAM(PART.web.value),
  },
];

const OurTeamList = () => {
  return (
    <div className='flex mt-12 flex-col gap-8'>
      {ourTeamList.map(({ label, description, path }) => (
        <div key={path} className='flex justify-between items-center'>
          <div>
            <FirstLetterPointText text={label} />
            <p className='text-xl font-medium text-gray-500'>{description}</p>
          </div>
          <Link
            to={path}
            className='flex items-center justify-center p-3 bg-amber-300 rounded-full w-12 h-12 hover:bg-secondary-400 transition'
          >
            <img src={ArrowRight} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default OurTeamList;
