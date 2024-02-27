import androidEmoji from '@assets/img/emoji/android-emoji.png';
import SpeechBubble from '@components/common/SpeechBubble.tsx';

const FAQBanner = () => {
  return (
    <div className='flex justify-between gap-16'>
      <img src={androidEmoji} alt='미모지' width={160} />
      <SpeechBubble>
        이곳은 앱센터에 관련된 질문이 있는 공간입니다!
        <br />
        공통질문과 각 파트별 질문이 나눠져 있으니, 더보기를 눌러 확인해보세요!
      </SpeechBubble>
    </div>
  );
};

export default FAQBanner;
