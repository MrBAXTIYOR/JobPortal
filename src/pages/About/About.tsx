import AboutHeader from './Components/AboutHeader';
import Container from '../../container/Container';
import AboutMissionReviews from './Components/AboutMissionReviews';
import AboutBecomeRole from './Components/AboutBecomeRole';
import AboutHero from './Components/AboutHero';

const About = () => {
  return (
    <div className=" bg-gray-50">
      <AboutHeader />
      <Container>
        <AboutHero />
        <AboutMissionReviews />
        <AboutBecomeRole />
      </Container>
    </div>
  );
};
export default About;
