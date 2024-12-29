import { useState } from 'react';
import { developerInfoData } from '../../../data/developerInfo';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import DeveloperInfoCard from '../../../components/DeveloperInfoCard/DeveloperInfoCard';
import Container from '../../../container/Container';

const DeveloperInfo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % developerInfoData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + developerInfoData.length) % developerInfoData.length,
    );
  };
  return (
    <section className="py-16 bg-[#F1F2F4]">
      <Container>
        <div className="px-4 sm:px-6">
          <div className="max-w-4xl mx-auto relative   ">
            <button
              onClick={prevSlide}
              className="absolute bottom-[-30px] left-[40%] -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 md:left-[30%] lg:left-[10%]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <DeveloperInfoCard {...developerInfoData[currentSlide]} />

            <button
              onClick={nextSlide}
              className="absolute bottom-[-30px] right-[40%] -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 md:right-[30%] lg:right-[10%]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {developerInfoData.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default DeveloperInfo;
