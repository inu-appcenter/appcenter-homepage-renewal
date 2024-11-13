import TitleBox from '@/components/common/TitleBox';
import { CATEGORY } from '@/constants/category';

const PhotoPage = () => {
  return (
    <>
      <TitleBox
        title={CATEGORY.DASGBOARD.PHOTO_BOARD.title}
        description={CATEGORY.DASGBOARD.PHOTO_BOARD.description}
      />
    </>
  );
};
export default PhotoPage;
