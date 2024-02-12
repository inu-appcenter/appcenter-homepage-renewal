import FaqDetailList from '@components/faqDetails/FaqDetailList.tsx';
import { Suspense } from 'react';
import Title from '@components/common/Title.tsx';
import { useParams } from 'react-router-dom';
import { PartParam } from '@type/common.ts';
import { PART } from '@constants/common.ts';

const FAQDetailPage = () => {
  const { part } = useParams<PartParam>();

  return (
    <div className='flex flex-col gap-y-8 p-8 mx-auto max-w-screen-md'>
      <Title title={`${PART[part ?? 'android'].label} FAQ`} />
      <Suspense>
        <FaqDetailList />
      </Suspense>
    </div>
  );
};

export default FAQDetailPage;
