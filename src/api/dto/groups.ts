type GroupsEntity = {
  group_id: number;
  member: string;
  profileImage: string;
  email: string;
  blogLink: string;
  gitRepositoryLink: string;
  role: string;
  part: string;
  year: number;
  createdDate: string;
  lastModifiedDate: string;
};

export type GroupsPublicAllResponse = GroupsEntity[];
export type GroupsPublicAllYearsResponse = {
  yearList: number[];
}
