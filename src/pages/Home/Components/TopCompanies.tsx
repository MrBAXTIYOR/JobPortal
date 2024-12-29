import { CompanyCard } from '../../../components/CompanyCard/CompanyCard';
import Container from '../../../container/Container';
import { topCompaniesData } from '../../../data/companies';

const TopCompanies = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <Container>
        <div className="px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
              Top companies
            </h2>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 flex items-center border-b-2 border-transparent hover:border-blue-600 focus:outline-none transition-all"
            >
              View All
              <span className="ml-2">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {topCompaniesData.map((company, index) => (
              <CompanyCard key={index} {...company} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default TopCompanies;
