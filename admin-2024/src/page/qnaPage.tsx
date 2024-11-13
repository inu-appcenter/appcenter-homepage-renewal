import TitleBox from '@/components/common/TitleBox';
import { CATEGORY } from '@/constants/category';

const QnAPage = () => {
  return (
    <>
      <TitleBox
        title={CATEGORY.DASGBOARD.FAQ.title}
        description={CATEGORY.DASGBOARD.FAQ.description}
      />
    </>
  );
};
export default QnAPage;
