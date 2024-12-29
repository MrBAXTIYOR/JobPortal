import BecomeRole from './Components/BecomeRole';
import DeveloperInfo from './Components/DeveloperInfo';
import FeaturedJobs from './Components/FeaturedJobs';
import Hero from './Components/Hero';
import HowItWorks from './Components/HowItWork';
import PopularCategories from './Components/PopularCategories';
import PopularVacancies from './Components/PopularVacancies';
import Stats from './Components/Stats';
import TopCompanies from './Components/TopCompanies';

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
