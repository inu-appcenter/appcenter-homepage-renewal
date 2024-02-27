export type IntroductionBoardEntity = {
  id: number;
  body: string;
  createdDate: string;
  lastModifiedDate: string;
  title: string;
  subTitle: string;
  androidStoreLink: string;
  appleStoreLink: string;
  images: {
    [index: string]: string;
  };
};

export type IntroductionBoardPublicAllListResponse = IntroductionBoardEntity[];

export type IntroductionBoardPublicByIdRequest = Pick<
  IntroductionBoardEntity,
  'id'
>;
export type IntroductionBoardPublicByIdResponse = IntroductionBoardEntity;
