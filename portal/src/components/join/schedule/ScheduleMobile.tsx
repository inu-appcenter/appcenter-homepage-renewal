import { ScheduleInfoList } from '@components/join/schedule/ScheduleSection.tsx';

type ScheduleMobileProps = {
  scheduleInfoList: ScheduleInfoList;
};
const ScheduleMobile: React.FC<ScheduleMobileProps> = ({
  scheduleInfoList,
}) => {
  return (
    <div className='flex md:hidden flex-col w-[calc(100%_-_2rem)]'>
      {scheduleInfoList.map(
        ({ month, chipLabel, lineLabel, scheduleList }, index) => (
          <div key={index} className='flex flex-col items-center flex-1'>
            <div className='relative'>
              <div className={`h-8 w-8 bg-primary-500 rounded-full`} />
              <div className='flex items-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-full'>
                <h6 className='text-primary-700 text-center font-semibold text-xl pl-2 whitespace-nowrap'>
                  {month}
                </h6>
              </div>
            </div>
            <div className='relative'>
              <div className='h-40 w-0.5 bg-primary-700' />
              <div className='flex flex-col gap-y-4 absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full'>
                <div className='w-fit px-6 py-1 text-secondary-300 font-medium border-secondary-300 border rounded-full'>
                  {chipLabel}
                </div>
                <p className='text-primary-800 font-medium whitespace-nowrap'>
                  {lineLabel}
                </p>
                {scheduleList && (
                  <ul className='relative whitespace-nowrap ml-4'>
                    {scheduleList.map((schedule, index) => (
                      <li
                        key={index}
                        className='before:content-["•"] before:absolute before:-left-3'
                      >
                        {schedule}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {index === scheduleInfoList.length - 1 && (
                <div className='absolute bottom-0 left-1/2 translate-y-full -translate-x-1/2'>
                  <div className='h-8 w-8 bg-primary-900 rounded-full' />
                  <h6 className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-full text-primary-700 text-center font-semibold text-xl pl-2 whitespace-nowrap'>
                    12월
                  </h6>
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ScheduleMobile;
