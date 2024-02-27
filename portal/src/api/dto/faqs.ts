type FaqsEntity = {
  id: string;
  body: string;
  createdDate: string;
  lastModifiedDate: string;
  part: string;
  question: string;
  answer: string;
};

export type FaqPublicAllListResponse = FaqsEntity[];
