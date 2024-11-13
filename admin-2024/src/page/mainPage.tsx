import BoxCard from '@/components/common/BoxCard';
import TitleBox from '@/components/common/TitleBox';
import { CATEGORY } from '@/constants/category';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <TitleBox
        title={CATEGORY.WELCONE.title}
        description={CATEGORY.WELCONE.description}
      />
      <div className='mt-10'>
        <p className='mb-4 text-xl'>대시보드 기능</p>
        <div className='grid grid-cols-1 gap-4'>
          {Object.entries(CATEGORY.DASGBOARD).map(
            ([key, { icon, title, description, path }]) => (
              <BoxCard
                key={key}
                icon={icon}
                title={title}
                description={description}
                onClick={() => navigate(path)}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};
export default MainPage;
