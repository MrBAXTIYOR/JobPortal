import Container from '../../../container/Container';
import { HowitworkData } from '../../../data/howitwork';

const HowItWorks = () => {
  return (
    <section className="py-16 relative bg-[#F1F2F4]">
      <Container>
        <div className=" px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            How jobpilot work
          </h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {HowitworkData.map((step, index) => (
              <div
                key={index}
                className="group text-center cursor-pointer hover:bg-white rounded-xl duration-300 p-3"
              >
                <div className="bg-white border-2 border-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 ">
                  <div className="cursor-pointer">
                    <div className=" w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0A65CC]">
                      <step.icon className="h-[25px] w-[25px] transition-colors duration-300 text-blue-600 group-hover:text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="font-medium mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
