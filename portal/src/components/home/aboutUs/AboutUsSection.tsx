import SectionLayout from '@components/common/layouts/SectionLayout.tsx';
import Title from '@components/common/Title.tsx';
import Slogan from '@components/home/aboutUs/Slogan.tsx';
import Interview from '@components/home/aboutUs/Interview.tsx';

const AboutUsSection = () => {
  return (
    <>
      <SectionLayout className='justify-between'>
        <div className='flex flex-col gap-12'>
          <Title title='ABOUT US' />
          <Slogan />
        </div>
        <Interview />
      </SectionLayout>
    </>
  );
};

export default AboutUsSection;
