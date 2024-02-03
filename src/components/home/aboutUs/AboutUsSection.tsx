import Title from '../../common/Title.tsx';
import Slogan from './Slogan.tsx';
import Interview from './Interview.tsx';

const AboutUsSection = () => {
  return (
    <>
      <div className='relative flex flex-col justify-center p-8 h-svh text-[#1E4995]'>
        <Title className='absolute left-8 top-8' title='About Us' />
        <Slogan />
      </div>
      <div className='p-8 h-[100svh]'>
        <Interview />
      </div>
    </>
  );
};

export default AboutUsSection;
