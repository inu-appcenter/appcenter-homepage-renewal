export type PhotoEntity = {
  id: number;
  body: string;
  createdDate: string;
  lastModifiedDate: string;
  images: Record<number, string>;
};

export type PhotoPayload = {
  body: string;
  multipartFiles?: File[];
};
