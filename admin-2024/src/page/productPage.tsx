import TitleBox from '@/components/common/TitleBox';
import { CATEGORY } from '@/constants/category';

const ProductPage = () => {
  return (
    <>
      <TitleBox
        title={CATEGORY.DASGBOARD.APP.title}
        description={CATEGORY.DASGBOARD.APP.description}
      />
    </>
  );
};
export default ProductPage;
