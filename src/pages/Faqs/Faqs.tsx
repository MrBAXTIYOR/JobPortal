import { useState } from 'react';
import AccordionItem from '../../components/AccordionItem/AccordionItem';
import Container from '../../container/Container';

const Faqs = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    'account-1': false,
    'account-2': false,
    'account-3': false,
    'employers-1': false,
    'employers-2': false,
    'employers-3': false,
    'candidate-1': false,
    'candidate-2': false,
    'candidate-3': false,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <Container>
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-semibold text-gray-900">Contact</h1>
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </a>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">Contact</span>
            </nav>
          </div>
        </Container>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Your Account</h2>
            <div className="bg-white rounded-lg overflow-hidden">
              <AccordionItem
                title="Donec in ipsum sit amet mi tincidunt lacinia ut id risus."
                isOpen={openItems['account-1']}
                onToggle={() => toggleItem('account-1')}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionItem>
              <AccordionItem
                title="Donec in ipsum sit amet mi tincidunt lacinia ut id risus."
                isOpen={openItems['account-2']}
                onToggle={() => toggleItem('account-2')}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pretium lacus ac ex tempus, sed dictum libero lacinia. Cras
                velit mauris, venenatis vel posuere at, scelerisque eget eros.
              </AccordionItem>
              <AccordionItem
                title="Etiam rutrum ligula at dui tempor, eu tempus ligula tristique."
                isOpen={openItems['account-3']}
                onToggle={() => toggleItem('account-3')}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionItem>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Employers and Jobs</h2>
            <div className="bg-white rounded-lg overflow-hidden">
              <AccordionItem
                title="Donec in ipsum sit amet mi tincidunt lacinia ut id risus."
                isOpen={openItems['employers-1']}
                onToggle={() => toggleItem('employers-1')}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionItem>
              <AccordionItem
                title="Etiam rutrum ligula at dui tempor, eu tempus ligula tristique."
                isOpen={openItems['employers-2']}
                onToggle={() => toggleItem('employers-2')}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionItem>
              <AccordionItem
                title="Morbi vitae neque eu sapien aliquet rhoncus."
                isOpen={openItems['employers-3']}
                onToggle={() => toggleItem('employers-3')}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionItem>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Candidate & Resume</h2>
            <div className="bg-white rounded-lg overflow-hidden">
              <AccordionItem
                title="Donec in ipsum sit amet mi tincidunt lacinia ut id risus."
                isOpen={openItems['candidate-1']}
                onToggle={() => toggleItem('candidate-1')}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionItem>
              <AccordionItem
                title="Etiam rutrum ligula at dui tempor, eu tempus ligula tristique."
                isOpen={openItems['candidate-2']}
                onToggle={() => toggleItem('candidate-2')}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionItem>
              <AccordionItem
                title="Morbi vitae neque eu sapien aliquet rhoncus."
                isOpen={openItems['candidate-3']}
                onToggle={() => toggleItem('candidate-3')}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionItem>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Faqs;
