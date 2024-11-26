export type IntroductionEntity = {
  id: number;
  body: string;
  createdDate: string;
  lastModifiedDate: string;
  title: string;
  subTitle: string;
  androidStoreLink: string;
  appleStoreLink: string;
  images: Record<number, string>;
};

export type IntroductionPayload = {
  body: string;
  multipartFiles?: File[];
  title: string;
  subTitle: string;
  androidStoreLink?: string;
  appleStoreLink?: string;
};
