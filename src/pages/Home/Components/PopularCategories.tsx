import CategoryCard from '../../../components/CategoryCard/CategoryCard';
import Container from '../../../container/Container';
import { categoriesData } from '../../../data/categories';

const PopularCategories = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Popular Categories</h2>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 flex items-center border-b-2 border-transparent hover:border-blue-600 focus:outline-none transition-all"
            >
              View All
              <span className="ml-2">→</span>
            </a>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {categoriesData.map((category, index) => (
              <CategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
                jobCount={category.jobCount}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default PopularCategories;
