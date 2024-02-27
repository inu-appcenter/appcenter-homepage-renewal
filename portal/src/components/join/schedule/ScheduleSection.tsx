import SectionLayout from '@components/common/layouts/SectionLayout.tsx';
import SectionTitle from '@components/join/SectionTitle.tsx';
import ScheduleDesktop from '@components/join/schedule/ScheduleDesktop.tsx';
import ScheduleMobile from '@components/join/schedule/ScheduleMobile.tsx';

const scheduleInfoList = [
  {
    month: '1월',
    chipLabel: '방학',
    lineLabel: '팀별 프로젝트',
    scheduleList: null,
  },
  {
    month: '3월',
    chipLabel: '학기중',
    lineLabel: '학기 중 팀 별 스터디',
    scheduleList: ['상반기 모집'],
  },
  {
    month: '6월',
    chipLabel: '방학',
    lineLabel: '팀별 프로젝트',
    scheduleList: ['워크샵'],
  },
  {
    month: '9월',
    chipLabel: '학기중',
    lineLabel: '학기 중 팀 별 스터디',
    scheduleList: ['하반기 모집'],
  },
];
export type ScheduleInfoList = typeof scheduleInfoList;

const ScheduleSection = () => {
  return (
    <SectionLayout className='gap-y-16 md:h-auto'>
      <SectionTitle title='앱센터의 1년 일정' className='flex justify-center' />
      <ScheduleDesktop scheduleInfoList={scheduleInfoList} />
      <ScheduleMobile scheduleInfoList={scheduleInfoList} />
    </SectionLayout>
  );
};

export default ScheduleSection;
