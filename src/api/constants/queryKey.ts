import { PART } from '@constants/common.ts';

const QUERY_KEY = {
  INTRODUCTION_BOARD: (id?: string) => ['introduction-board', id],

  FAQS_PUBLIC_ALL: (topic?: keyof typeof PART) => ['all-faq-boards', topic],
};

export default QUERY_KEY;
