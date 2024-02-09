import Title from '../../common/Title.tsx';
import Slogan from './Slogan.tsx';
import Interview from './Interview.tsx';
import SectionLayout from '../SectionLayout.tsx';

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
