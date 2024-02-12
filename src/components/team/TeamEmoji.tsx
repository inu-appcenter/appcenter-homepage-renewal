import androidEmoji from '@assets/img/emoji/android-emoji.png';
import designEmoji from '@assets/img/emoji/design-emoji.png';
import iosEmoji from '@assets/img/emoji/ios-emoji.png';
import serverEmoji from '@assets/img/emoji/server-emoji.png';
import webEmoji from '@assets/img/emoji/web-emoji.png';
import { PART } from '@constants/common.ts';
import { useParams } from 'react-router-dom';
import { TeamParam } from '@type/common.ts';
import SpeechBubble from '@components/common/SpeechBubble.tsx';

const teamEmojiObject = {
  [PART.android.value]: {
    part: PART.android.value,
    description: '안녕하세요! 안드로이드 파트 입니다.',
    emoji: androidEmoji,
  },
  [PART.design.value]: {
    part: PART.design.value,
    description:
      '안녕하세요! 아이디어가 넘치는 디자인 입니다! 함께 배우며 함께 성장하는 디자인팀으로 오세요!',
    emoji: designEmoji,
  },
  [PART.ios.value]: {
    part: PART.ios.value,
    description: '안녕하세요! iOS 파트 입니다.',
    emoji: iosEmoji,
  },
  [PART.server.value]: {
    part: PART.server.value,
    description: '안녕하세요! 서버 파트 입니다.',
    emoji: serverEmoji,
  },
  [PART.web.value]: {
    part: PART.web.value,
    description: '안녕하세요! 웹 파트 입니다.',
    emoji: webEmoji,
  },
};

const TeamEmoji = () => {
  const { part } = useParams<TeamParam>();
  const { description, emoji } = teamEmojiObject[part ?? 'android'];

  return (
    <div className='flex justify-center gap-x-16'>
      <img src={emoji} width={160} />
      <SpeechBubble>{description}</SpeechBubble>
    </div>
  );
};

export default TeamEmoji;
