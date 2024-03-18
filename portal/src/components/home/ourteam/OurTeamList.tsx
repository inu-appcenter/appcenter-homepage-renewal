import { Link } from 'react-router-dom';
import ArrowRight from '@assets/svg/arrow_right.svg';
import FirstLetterPointText from '@components/common/FirstLetterPointText.tsx';
import { ourTeamList } from '@assets/text/team.ts';

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
            <img src={ArrowRight} alt='오른쪽 화살표' />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default OurTeamList;
