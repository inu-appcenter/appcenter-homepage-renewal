import SectionLayout from '@components/common/layouts/SectionLayout.tsx';
import Title from '@components/common/Title.tsx';
import ContactUsList from '@components/home/contactUs/ContactUsList.tsx';

const ContactUsSection = () => {
  return (
    <>
      <SectionLayout className='justify-between mb-60'>
        <div className='flex flex-col gap-8'>
          <Title title='CONTACT US' />
          <ContactUsList />
        </div>
      </SectionLayout>
    </>
  );
};

export default ContactUsSection;
