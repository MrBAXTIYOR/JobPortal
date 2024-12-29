import Container from '../../../container/Container';
import { vacanciesData } from '../../../data/vacancies';

const PopularVacancies = () => {
  return (
    <Container>
      <div className=" px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Most Popular Vacancies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vacanciesData.map((job, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg transition-shadow cursor-pointer"
            >
              <h3 className="inline-block text-lg font-semibold text-gray-900 mb-2 hover:text-[#0A65CC] border-b-2 border-transparent hover:border-[#0A65CC]">
                {job.title}
              </h3>

              <p className="text-sm text-gray-600">{job.positions}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default PopularVacancies;
