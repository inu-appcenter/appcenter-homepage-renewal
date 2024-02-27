import dayjs from 'dayjs';

type StaticBoxProps = {
  label: string;
  accent: string;
};
const StaticBox: React.FC<StaticBoxProps> = ({ label, accent }) => {
  return (
    <div className='flex flex-col justify-center gap-4 h-48 p-8 bg-primary-900 rounded-2xl text-center'>
      <p className='text-white font-bold text-lg'>{label}</p>
      <h6 className='text-white font-extrabold text-5xl'>{accent}</h6>
    </div>
  );
};
const StaticBoxList = () => {
  return (
    <div className='grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-4'>
      <StaticBox label='창립된지' accent={`${dayjs().year() - 2009 + 1}년`} />
      <StaticBox label='누적 멤버 수' accent='150+' />
      <StaticBox label='현재 활성화된 서비스' accent='10+' />
      <StaticBox label='전공취업 동아리 수상' accent='2년 연속' />
    </div>
  );
};

export default StaticBoxList;
