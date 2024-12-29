import Container from '../../../container/Container';

const BecomeRole = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-lg p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Become a Candidate</h3>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  cursus a dolor convallis efficitur.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 inline-flex items-center group">
                  Register Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500"
                alt="Candidate"
                className="absolute right-0 top-0 h-full w-full object-cover opacity-50"
              />
            </div>

            <div className="bg-blue-600 rounded-lg p-8 relative overflow-hidden text-white">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Become an Employer</h3>
                <p className="text-blue-100 mb-6">
                  Cras in massa pellentesque, mollis ligula non, luctus dui.
                  Morbi sed efficitur dolor. Phasque augue risus, aliqu.
                </p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-blue-50 inline-flex items-center group">
                  Register Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500"
                alt="Employer"
                className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default BecomeRole;
