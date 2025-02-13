import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '../../../container/Container';

const AboutMissionReviews = () => {
  return (
      <Container>
        <section className=" px-4 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="Person working"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Team meeting"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Office work"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-blue-600 font-medium mb-4">Our Mission:</p>
              <h2 className="text-4xl font-bold mb-6">
                Our mission is help people to find the perfect job.
              </h2>
              <p className="text-gray-600">
                We connect talented professionals with leading companies to
                create meaningful career opportunities and drive business
                success.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb"
                alt="Illustration"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 mt-[20px]">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Team discussion"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-blue-600 font-medium mb-4">Testimonial</h3>
              <h2 className="text-3xl font-bold mb-8">What our people says</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Working with this platform has been an incredible experience.
                  They helped me find my dream job within weeks. The team is
                  professional and truly cares about matching the right talent
                  with the right opportunity."
                </p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold">John Wick</h4>
                    <p className="text-gray-600">Product Designer</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                <button className="p-2 rounded-full bg-blue-600 text-white">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-blue-600 text-white">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </Container>
  );
};
export default AboutMissionReviews;
