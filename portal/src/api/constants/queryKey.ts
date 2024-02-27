import { Part } from '@type/common.ts';

const QUERY_KEY = {
  INTRODUCTION_BOARD: (id?: number) => ['introduction-board', id],

  FAQS_PUBLIC_ALL: (topic?: Part) => ['faqs', topic],

  GROUPS_PUBLIC_ALL: (year?: number, part?: Part) => ['groups', year, part],
  GROUPS: ['groups'],
};

export default QUERY_KEY;
