import Title from '../components/common/Title.tsx';
import PartFaqGrid from '../components/faq/PartFaqGrid.tsx';

const FAQPage = () => {
  return (
    <div className='flex flex-col p-8 gap-y-4'>
      <Title title='FAQ' />
      <PartFaqGrid />
    </div>
  );
};

export default FAQPage;
