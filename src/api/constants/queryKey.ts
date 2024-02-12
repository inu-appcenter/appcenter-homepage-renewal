import { PART } from '@constants/common.ts';

const QUERY_KEY = {
  INTRODUCTION_BOARD: (id?: string) => ['introduction-board', id],

  FAQS_PUBLIC_ALL: (topic?: keyof typeof PART) => ['faqs', topic],

  GROUPS_PUBLIC_ALL: (year: number, part: keyof typeof PART) => [
    'groups',
    year,
    part,
  ],
};

export default QUERY_KEY;
