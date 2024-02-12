import SectionLayout from '@components/common/layouts/SectionLayout.tsx';
import Title from '@components/common/Title.tsx';
import OurTeamList from '@components/home/ourteam/OurTeamList.tsx';

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
