import androidEmoji from '@assets/img/emoji/android-emoji.png';

const FAQBanner = () => {
  return (
    <div className='flex justify-between gap-16'>
      <img src={androidEmoji} alt='미모지' width={160} />
      <div className='relative bg-secondary-100 p-6 pl-4 rounded-3xl border-l-8 lg:border-l-[17px] border-secondary-100 h-fit before:absolute before:-left-8 before:bottom-0 before:h-8 before:border-[32px] before:rounded-br-6xl before:rounded-bl-lg before:border-secondary-100 before:-z-10 after:absolute after:-left-[4.5rem] after:bottom-0 after:h-8 after:border-[32px] after:rounded-br-4xl after:border-white after:-z-10'>
        이곳은 앱센터에 관련된 질문이 있는 공간입니다!
        <br />
        공통질문과 각 파트별 질문이 나눠져 있으니, 더보기를 눌러 확인해보세요!
      </div>
    </div>
  );
};

export default FAQBanner;
