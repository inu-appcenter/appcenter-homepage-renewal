import TitleBox from '@/components/common/TitleBox';
import { CATEGORY } from '@/constants/category';

const MemberPage = () => {
  return (
    <>
      <TitleBox
        title={CATEGORY.CLUB_MANAGE.MEMBER.title}
        description={CATEGORY.CLUB_MANAGE.MEMBER.description}
      />
    </>
  );
};
export default MemberPage;
