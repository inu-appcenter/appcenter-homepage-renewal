import SectionLayout from '@components/common/layouts/SectionLayout.tsx';
import Title from '@components/common/Title.tsx';
import Interview from '@components/home/aboutUs/Interview.tsx';
import StaticBoxList from '@components/home/aboutUs/StaticBoxList.tsx';

const AboutUsSection = () => {
  return (
    <>
      <SectionLayout className='justify-between'>
        <div className='flex flex-col gap-8'>
          <Title title='ABOUT US' />
          <StaticBoxList />
        </div>
        <Interview />
      </SectionLayout>
    </>
  );
};

export default AboutUsSection;
