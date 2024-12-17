export const BASE_URL = 'https://server.inuappcenter.kr';

export const API = {
  // [Sign] 로그인
  SIGN_IN: `/sign/sign-in`,

  // [Role] 역할 관리
  ROLES: `/roles`,
  ROLES_ID: (id: number) => `/roles/${id}`,
  GET_ROLES_ID_NAME: (name: string) => `/roles/id/${name}`,
  GET_ALL_ROLES: `/roles/all-roles`,

  // [Photo] 사진 게시판
  PHOTO_BOARD: `/photo-board`,
  PATCH_PHOTO_BOARD_ID: (photo_ids: number[]) =>
    `/photo-board/${photo_ids.join(',')}`,
  GET_PHOTO_BOARD_ID: (id: number) => `/photo-board/public/${id}`,
  ALL_PHOTO_BOARD: `/photo-board/public/all-boards-contents`,
  DELETE_PHOTO_BOARD_ID: (id: number) => `/photo-board/${id}`,

  // [Member] 동아리원 관리
  MEMBERS: `/members`,
  MEMBERS_ID: (id: number) => `/members/${id}`,
  MEMBERS_NAME: (name: string) => `/members/id/${name}`,
  ALL_MEMBERS: `/members/all-members`,

  // [Intro] 애플리케이션 소개 게시판
  INTRO_BOARD: `/introduction-board`,
  PATCH_INTRO_BOARD_ID: (photo_ids: number[]) =>
    `/introduction-board/${photo_ids.join(',')}`,
  GET_INTRO_BOARD_ID: (id: number) => `/introduction-board/public/${id}`,
  ALL_INTRO_BOARD: `/introduction-board/public/all-boards-contents`,
  DELETE_INTRO_BOARD_ID: (id: number) => `/introduction-board/${id}`,

  // [Group] 멤버 편성 관리
  GROUPS: `/groups`,
  GET_GROUPS_ID: (id: number) => `/groups/public/${id}`,
  ALL_PARTS: `/groups/public/all-parts`,
  ALL_GROUPS_YEARS: `/groups/public/all-groups-years`,
  ALL_GROUPS_MEM: `/groups/public/all-groups-members`,
  GROUPS_MEM_NAME: (name: string) => `/groups/members/${name}`,
  DELETE_GROUPS_MEM: (id: number) => `/groups/${id}`,
  DELETE_GROUPS_MEMS: (id: number) => `/all-groups-members/${id}`,

  // [FAQ] 질의응답 게시판
  FAQ: `/faqs`,
  GET_FAQ_ID: (id: number) => `/faqs/public/${id}`,
  GET_ALL_FAQS: `/faqs/public/all-faq-boards`,
  DELETE_FAQ: (id: number) => `/faqs/${id}`,

  // [Image] 이미지
  GET_IMG_ID: (id: number) => `/image/photo/${id}`,
  DELETE_IMGS: `/image/photo`,
} as const;
