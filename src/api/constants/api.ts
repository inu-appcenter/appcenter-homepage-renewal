const API = {
  INTRODUCTION_BOARD: (id: string) => `/introduction-board/${id ?? ''}`,
  INTRODUCTION_BOARD_PUBLIC: (id: string) =>
    `/introduction-board/public/${id ?? ''}`,
  INTRODUCTION_BOARD_PUBLIC_ALL: `/introduction-board/public/all-boards-contents`,
};

export default API;
