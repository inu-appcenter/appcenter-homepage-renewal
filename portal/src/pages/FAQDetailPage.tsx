import FaqDetailList from '@components/faqDetails/FaqDetailList.tsx';
import { Suspense } from 'react';
import Title from '@components/common/Title.tsx';
import { useParams } from 'react-router-dom';
import { PartParam } from '@type/common.ts';
import { PART } from '@constants/common.ts';
import FaqDetailTabs from '@components/faqDetails/FaqDetailTabs.tsx';
import { Spinner } from '@chakra-ui/react';

const FAQDetailPage = () => {
  const { part } = useParams<PartParam>();

  return (
    <div className='flex flex-col gap-y-8 p-8 mx-auto max-w-screen-md'>
      <Title title={`${PART[part ?? 'android'].label} FAQ`} />
      <FaqDetailTabs />
      <Suspense
        fallback={
          <div className='flex justify-center items-center h-52'>
            <Spinner />
          </div>
        }
      >
        <FaqDetailList />
      </Suspense>
    </div>
  );
};

export default FAQDetailPage;
