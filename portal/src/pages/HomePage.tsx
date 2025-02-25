import AboutUsSection from '@components/home/aboutUs/AboutUsSection.tsx';
import OurTeamSection from '@components/home/ourteam/OurTeamSection.tsx';
import ProductSection from '@components/home/product/ProductSection.tsx';
import ContactUsSection from '@components/home/contactUs/ContactUsSection.tsx';
import { SECTION } from '@constants/common.ts';

const HomePage = () => {
  return (
    <>
      <div id={SECTION.about.id}>
        <AboutUsSection />
      </div>
      <div id={SECTION.team.id}>
        <OurTeamSection />
      </div>
      <div id={SECTION.product.id}>
        <ProductSection />
      </div>
      <div id={SECTION.contact.id}>
        <ContactUsSection />
      </div>
    </>
  );
};

export default HomePage;
