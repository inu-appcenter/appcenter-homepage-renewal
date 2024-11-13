import SquareCard from '@/components/common/SquareCard';
import TitleBox from '@/components/common/TitleBox';
import { CATEGORY } from '@/constants/category';
import { useNavigate } from 'react-router-dom';

const ClubPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <TitleBox
        title={CATEGORY.DASGBOARD.CLUB.title}
        description={CATEGORY.DASGBOARD.CLUB.description}
      />
      <div className='mt-10'>
        <div className='grid grid-cols-2 gap-4'>
          {Object.entries(CATEGORY.CLUB_MANAGE).map(
            ([key, { icon, title, description, path }]) => (
              <SquareCard
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
export default ClubPage;
