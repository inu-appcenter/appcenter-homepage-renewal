export const PART = {
  android: {
    id: 'android',
    value: 'android',
    label: 'Android',
  },
  design: {
    id: 'design',
    value: 'design',
    label: 'Design',
  },
  ios: {
    id: 'ios',
    value: 'ios',
    label: 'iOS',
  },
  server: {
    id: 'server',
    value: 'server',
    label: 'Server',
  },
  web: {
    id: 'web',
    value: 'web',
    label: 'Web',
  },
} as const;

export const SECTION = {
  about: {
    id: 'about',
    value: 'about',
    label: 'About Us',
  },
  team: {
    id: 'team',
    value: 'team',
    label: 'Our Team',
  },
  product: {
    id: 'product',
    value: 'product',
    label: 'Product',
  },
} as const;

const partInfo = [
  {
    id: 0,
    partName: 'Common',
    question: '앱센터는 어떻게 들어오나요?',
    description: '다른 분야가 모여 하나의 목표를 향해 나아갑니다',
    speechBubble:
      '이곳은 앱센터에 관련된 질문이 있는 공간입니다!\n' +
      '공통질문과 각 파트별 질문이 나눠져 있으니\n' +
      '더보기를 눌러 확인해보세요!',
  },
  {
    id: 1,
    partName: 'Android',
    question: 'Java 와 Kotlin 중 어떤 언어를 쓰나요?',
    description: '안드로이드 운영체제에서 작동하는 앱을 구현합니다',
    speechBubble: '안녕하세요! 안드로이드 파트 입니다.',
  },
  {
    id: 5,
    partName: 'Design',
    question: 'Figma, XD 할 줄 알아야 하나요?',
    description: '앱을 디자인하고 서비스를 설계합니다',
    speechBubble:
      '안녕하세요! 아이디어가 넘치는 디자인 입니다!\n함께 배우며 함께 성장하는 디자인팀으로 오세요!',
  },
  {
    id: 2,
    partName: 'iOS',
    question: '맥북 필수인가요?',
    description: 'IOS 운영체제에서 작동하는 앱을 구현합니다',
    speechBubble: '안녕하세요 ios 파트 입니다.',
  },
  {
    id: 3,
    partName: 'Server',
    question: 'Node, Spring중 어떤 것을 사용하나요?',
    description: '서버를 구현합니다.',
    speechBubble: '안녕하세요 서버 파트 입니다.\n',
  },
  {
    id: 4,
    partName: 'Web',
    question: 'React 할 줄 알아야 하나요?',
    description: '웹환경에 맞춘 서비스를 구현합니다',
    speechBubble: '안녕하세요 웹 파트 입니다.\n',
  },
];
