import { objectToQueryString, QueryStringObject } from '@/utils/queryString.ts';

const API = {
  INTRODUCTION_BOARD: (id: string) => `/introduction-board/${id ?? ''}`,
  INTRODUCTION_BOARD_PUBLIC: (id: string) =>
    `/introduction-board/public/${id ?? ''}`,
  INTRODUCTION_BOARD_PUBLIC_ALL: `/introduction-board/public/all-boards-contents`,
  INTRODUCTION_BOARD_PUBLIC_BY_ID: (id: number) =>
    `/introduction-board/public/${id ?? ''}`,

  FAQS_PUBLIC_ALL: (obj: QueryStringObject) =>
    `faqs/public/all-faq-boards?${objectToQueryString(obj)}`,

  GROUPS_PUBLIC_ALL: (obj: QueryStringObject) =>
    `groups/public/all-groups-members?${objectToQueryString(obj)}`,
  GROUPS_PUBLIC_ALL_YEARS: 'groups/public/all-groups-years',
};

export default API;
