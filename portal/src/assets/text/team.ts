import { PART } from '@constants/common.ts';
import { PATH } from '@constants/path.ts';

export const ourTeamList = [
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
