import SectionLayout from '@components/common/layouts/SectionLayout.tsx';
import SectionTitle from '@components/join/SectionTitle.tsx';
import PaperPlain from '@assets/svg/paper-plane.svg';

const joinStep = [
  {
    label: 'step1',
    content: '3월 9월에 에브리타임 게시판에서 공고를 확인합니다.',
  },
  {
    label: 'step2',
    content: '공고에 올라온 구글폼 링크에서 원하는 파트를 지원합니다!',
  },
  {
    label: 'step3',
    content: '서류 합격 시 적합성 면접을 진행합니다!',
  },
  {
    label: 'step4',
    content: '최종 합격 시 활동을 시작합니다.',
  },
];

const JoinSection = () => {
  return (
    <SectionLayout className='md:h-auto gap-y-8 items-center'>
      <SectionTitle title='앱센터 지원' className='flex justify-center' />
      <div className='flex flex-col gap-4 md:grid md:grid-cols-2 max-w-screen-md'>
        {joinStep.map(({ label, content }) => (
          <div
            key={label}
            className='flex flex-col gap-y-2 bg-primary-200 rounded-3xl px-6 py-6 md:py-4'
          >
            <p className='bg-white w-fit px-4 py-1 rounded-2xl text-primary-700 font-semibold'>
              {label}
            </p>
            <p className='pl-2 font-medium'>{content}</p>
          </div>
        ))}
      </div>
      <a
        href='https://join.inuappcenter.kr'
        className='flex items-center gap-x-2 border border-primary-700 rounded-3xl px-4 py-2 text-primary-700 font-semibold text-lg hover:bg-primary-200 transition cursor-pointer'
      >
        지원하러 가기
        <img src={PaperPlain} alt='앱센터 지원 공고 링크' width={20} />
      </a>
    </SectionLayout>
  );
};

export default JoinSection;
