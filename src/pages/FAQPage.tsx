import Title from '@/components/common/Title.tsx';
import PartFaqGrid from '@/components/faq/PartFaqGrid.tsx';
import FAQBanner from '@components/faq/FAQBanner.tsx';

const FAQPage = () => {
  return (
    <div className='flex flex-col p-8 gap-y-8 max-w-screen-md mx-auto'>
      <Title title='FAQ' />
      <FAQBanner />
      <PartFaqGrid />
    </div>
  );
};

export default FAQPage;
