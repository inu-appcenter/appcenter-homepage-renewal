import SectionLayout from '@components/common/layouts/SectionLayout.tsx';
import Title from '@components/common/Title.tsx';
import ContectUsList from '@components/home/contectUs/ContectUsLitst.tsx';

const ContectUsSection = () => {
  return (
    <>
      <SectionLayout className='justify-between'>
        <div className='flex flex-col gap-8'>
          <Title title='CONTECT US' />
          <ContectUsList />
        </div>
      </SectionLayout>
    </>
  );
};

export default ContectUsSection;
