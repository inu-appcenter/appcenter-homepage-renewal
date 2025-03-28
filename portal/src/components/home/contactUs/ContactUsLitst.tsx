import ArrowRight from '@assets/svg/arrow_right.svg';
import FirstLetterPointText from '@components/common/FirstLetterPointText.tsx';

const ContactUsList = () => {
  return (
    <div className='flex mt-12 flex-col gap-8'>
      <div className='flex justify-between items-center'>
        <div>
          <FirstLetterPointText text={'Kakao Talk 채널'} />
          <p className='text-xl font-medium text-gray-500'>
            pf.kakao.com/_xgxaSLd
          </p>
        </div>
        <a
          href={'http://pf.kakao.com/_xgxaSLd'}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center p-3 bg-amber-300 rounded-full w-12 h-12 hover:bg-secondary-400 transition'
        >
          <img src={ArrowRight} alt='오른쪽 화살표' />
        </a>
      </div>
      <div className='flex justify-between items-center'>
        <div>
          <FirstLetterPointText text={'Instagram'} />
          <p className='text-xl font-medium text-gray-500'>
            instagram.com/inuappcenter
          </p>
        </div>
        <a
            href={'https://www.instagram.com/inuappcenter'}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center p-3 bg-amber-300 rounded-full w-12 h-12 hover:bg-secondary-400 transition'
        >
          <img src={ArrowRight} alt='오른쪽 화살표' />
        </a>
      </div>
      <div className='flex justify-between items-center'>
        <div>
          <FirstLetterPointText text={'Email'} />
          <p className='text-xl font-medium text-gray-500'>
            inuappcenter@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsList;
