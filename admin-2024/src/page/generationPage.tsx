import TitleBox from '@/components/common/TitleBox';
import { CATEGORY } from '@/constants/category';

const GenerationPage = () => {
  return (
    <>
      <TitleBox
        title={CATEGORY.CLUB_MANAGE.ORDINAL_NUMS.title}
        description={CATEGORY.CLUB_MANAGE.ORDINAL_NUMS.description}
      />
    </>
  );
};
export default GenerationPage;
