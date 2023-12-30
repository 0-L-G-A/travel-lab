import Banner from './Banner';
import HelpBlock from './HelpBlock';
import PriceBlock from './PriceBlock';
import OurServicesBlock from './OurServices';
import CustomerReviewsBlock from './CustomerReviewsBlock';

const Landing = () => {
  return (
    <>
      <Banner />
      <OurServicesBlock />
      <PriceBlock />
      <CustomerReviewsBlock />
      <HelpBlock />
    </>
  );
}

export default Landing;