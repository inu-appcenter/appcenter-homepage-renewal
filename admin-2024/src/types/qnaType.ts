export type QnaEntity = {
  part: string;
  question: string;
  answer: string;
};

/**
 * GET /faqs/public/{id}
 */
export type SingleQnAResDto = {
  id: number;
  body: string;
  createdDate: string;
  lastModifiedDate: string;
};

export type QnaRes = SingleQnAResDto & QnaEntity;

/**
 * GET /faqs/public/all-faq-boards
 */
export type AllQnAResDto = QnaRes[];
