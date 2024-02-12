import AboutUsSection from '@components/home/aboutUs/AboutUsSection.tsx';
import OurTeamSection from '@components/home/ourteam/OurTeamSection.tsx';
import ProductSection from '@components/home/product/ProductSection.tsx';

const HomePage = () => {
  return (
    <>
      <AboutUsSection />
      <OurTeamSection />
      <ProductSection />
    </>
  );
};

export default HomePage;
