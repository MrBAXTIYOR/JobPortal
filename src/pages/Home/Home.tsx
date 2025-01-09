import Hero from './Components/Hero';
import Stats from './Components/Stats';
import HowItWorks from './Components/HowItWork';
import BecomeRole from './Components/BecomeRole';
import TopCompanies from './Components/TopCompanies';
import FeaturedJobs from './Components/FeaturedJobs';
import DeveloperInfo from './Components/DeveloperInfo';
import PopularVacancies from './Components/PopularVacancies';
import PopularCategories from './Components/PopularCategories';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Stats />
      <PopularVacancies />
      <HowItWorks />
      <PopularCategories />
      <FeaturedJobs />
      <TopCompanies />
      <DeveloperInfo />
      <BecomeRole />
    </div>
  );
};
export default Home;
