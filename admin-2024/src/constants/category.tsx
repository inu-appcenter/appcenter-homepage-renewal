import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Groups2Icon from '@mui/icons-material/Groups2';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import QuizIcon from '@mui/icons-material/Quiz';
import { PATH } from './path';

const CATEGORY = {
  WELCONE: {
    icon: <HomeIcon fontSize='medium' />,
    title: '홈페이지 대시보드',
    description: '🎊 환영합니다 🎊',
    path: PATH.ROOT,
  },
  DASGBOARD: {
    CLUB: {
      icon: <FaceRetouchingNaturalIcon fontSize='large' />,
      title: '동아리 관리',
      description: '동아리원 정보와 기수, 역할을 관리할 수 있어요',
      path: PATH.CLUB,
    },
    APP: {
      icon: <AppShortcutIcon fontSize='large' />,
      title: '앱 관리',
      description: '홈페이지에 게재된 앱 정보와 목록을 관리할 수 있어요',
      path: PATH.PRODUCT,
    },
    PHOTO_BOARD: {
      icon: <PhotoCameraIcon fontSize='large' />,
      title: '사진 게시판 관리',
      description: '활동 사진에 게재된 사진들을 관리할 수 있어요',
      path: PATH.PHOTO,
    },
    FAQ: {
      icon: <QuizIcon fontSize='large' />,
      title: '질문 관리',
      description: '질문과 답변을 추가, 삭제, 수정을 할 수 있어요',
      path: PATH.QNA,
    },
  },
  CLUB_MANAGE: {
    MEMBER: {
      icon: <PersonIcon fontSize='large' />,
      title: '동아리원 관리',
      description: '동아리원을 추가, 삭제, 수정을 할 수 있어요',
      path: PATH.MEMBER,
    },
    ORDINAL_NUMS: {
      icon: <FormatListNumberedIcon fontSize='large' />,
      title: '기수 관리',
      description: '기수에 동아리원을 역할과 함께 편성할 수 있어요',
      path: PATH.GENGERATION,
    },
    ROLE: {
      icon: <Groups2Icon fontSize='large' />,
      title: '역할 관리',
      description: '센터장, 파트장, 파트원과 같은 역할을 추가할 수 있어요',
      path: PATH.ROLE,
    },
  },
};

export { CATEGORY };
