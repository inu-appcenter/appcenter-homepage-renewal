import TitleBox from '@/components/common/TitleBox';
import { CATEGORY } from '@/constants/category';

const RolePage = () => {
  return (
    <>
      <TitleBox
        title={CATEGORY.CLUB_MANAGE.ROLE.title}
        description={CATEGORY.CLUB_MANAGE.ROLE.description}
      />
    </>
  );
};
export default RolePage;
