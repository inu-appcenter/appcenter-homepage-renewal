export type GroupEntity = {
  group_id: number;
  member: string;
  email: string;
  role: string;
  part: string;
  year: number;
};

export type GroupPayload = {
  part: string;
  year: number;
};

export type PartEntity = {
  parts: string[];
};

export type YearEntity = {
  yearList: number[];
};
