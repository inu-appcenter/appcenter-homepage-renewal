import Title from '../../common/Title.tsx';
import SectionLayout from '../../common/layouts/SectionLayout.tsx';
import OurTeamList from './OurTeamList.tsx';

const OurTeamSection = () => {
  return (
    <SectionLayout className='justify-center'>
      <Title
        title='OUR TEAM'
        subtitle='다른 분야가 모여 하나의 목표를 향해 나아갑니다.'
      />
      <OurTeamList />
    </SectionLayout>
  );
};

export default OurTeamSection;
