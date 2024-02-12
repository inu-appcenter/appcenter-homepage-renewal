import { useParams } from 'react-router-dom';
import { PartParam } from '@type/common.ts';
import useGetFaqsPublicAllQuery from '@api/query/useGetFaqsPublicAllQuery.ts';

const FaqDetailList = () => {
  const { part } = useParams<PartParam>();
  const { data } = useGetFaqsPublicAllQuery(part ?? 'android');

  return (
    <ul className='flex flex-col gap-4'>
      {data.map(({ id, question, answer }) => (
        <li
          key={id}
          className='flex flex-col gap-y-2 p-4 bg-primary-200 rounded-3xl'
        >
          <p className='relative py-2 px-4 bg-white rounded-3xl font-semibold before:content-["Q."] before:mr-1 before:leading-4 before:font-semibold'>
            {question}
          </p>
          <p className='px-4 text-primary-800 font-medium'>{answer}</p>
        </li>
      ))}
    </ul>
  );
};

export default FaqDetailList;
