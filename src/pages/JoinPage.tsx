import ScheduleSection from '../components/join/schedule/ScheduleSection.tsx';
import JoinSection from '../components/join/join/JoinSection.tsx';
import SectionLayout from '../components/common/layouts/SectionLayout.tsx';

const JoinPage = () => {
  return (
    <>
      <SectionLayout className='h-auto md:h-svh justify-between gap-y-8'>
        <ScheduleSection />
        <JoinSection />
      </SectionLayout>
    </>
  );
};

export default JoinPage;
