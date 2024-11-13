export type MemberEntity = {
  member_id: number;
  name: string;
  description: string | null;
  profileImage: string | null;
  blogLink: string | null;
  email: string;
  gitRepositoryLink: string | null;
  behanceLink: string | null;
  phoneNumber: string;
  studentNumber: string | null;
  department: string | null;
  createdDate: string;
  lastModifiedDate: string;
};
