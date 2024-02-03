import Title from '../common/Title.tsx';

const AboutUsSection = () => {
  return (
    <div className='relative flex flex-col justify-center p-8 h-[100svh] text-[#1E4995]'>
      <Title className='absolute left-8 top-8' title='About Us' />
      <div className='flex flex-col justify-center items-center gap-y-6'>
        <p className='font-semibold'>INU APPCENTER</p>
        <h2 className='text-secondary-300 font-bold text-5xl'>
          우리에게 필요한 것은 우리가 만든다
        </h2>
        <p className='font-semibold text-center'>
          앱센터는 교내 정보전산원 소속으로, 학생들이 애플리케이션과 서비스를
          만드는 공간입니다. <br />
          활동에 필요한 비용의 일부를 전산원으로부터 지원받고 있습니다.
        </p>
      </div>
    </div>
  );
};

export default AboutUsSection;
