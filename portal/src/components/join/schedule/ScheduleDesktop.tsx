import { ScheduleInfoList } from '@components/join/schedule/ScheduleSection.tsx';

type ScheduleDesktopProps = {
  scheduleInfoList: ScheduleInfoList;
};
const ScheduleDesktop: React.FC<ScheduleDesktopProps> = ({
  scheduleInfoList,
}) => {
  return (
    <div className='hidden md:flex w-[calc(100%_-_2rem)]'>
      {scheduleInfoList.map(
        ({ month, chipLabel, lineLabel, scheduleList }, index) => (
          <div key={index} className='flex items-center flex-1'>
            <div className='relative'>
              <div className={`h-8 w-8 bg-primary-500 rounded-full`} />
              <div className='absolute top-full left-1/2 -translate-x-1/2 mt-2 w-full'>
                <h6 className='text-primary-700 text-center mb-2 font-semibold text-xl'>
                  {month}
                </h6>
                {scheduleList && (
                  <ul className='relative whitespace-nowrap'>
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
            </div>
            <div className='relative flex flex-col items-center gap-y-4 flex-1'>
              <div className='px-6 text-secondary-300 font-medium border-secondary-300 border rounded-full'>
                {chipLabel}
              </div>
              <div className='h-0.5 w-full bg-primary-700' />
              <p className=' text-primary-800 font-medium whitespace-nowrap'>
                {lineLabel}
              </p>
              {index === scheduleInfoList.length - 1 && (
                <div className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-full'>
                  <div className={`h-8 w-8 bg-primary-900 rounded-full`} />
                  <h6 className='absolute top-full left-1/2 -translate-x-1/2 mt-2 w-full text-primary-700 text-center font-semibold text-xl whitespace-nowrap'>
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

export default ScheduleDesktop;
