import { Briefcase, Building2, Users } from 'lucide-react';
import Container from '../../../container/Container';

const stats = [
  { id: 1, name: 'Live Job', value: '175,324', icon: Briefcase },
  { id: 2, name: 'Companies', value: '97,354', icon: Building2 },
  { id: 3, name: 'Candidates', value: '38,47,154', icon: Users },
  { id: 4, name: 'New Jobs', value: '7,532', icon: Briefcase },
];

const Stats = () => {
  return (
    <section className="bg-white py-5">
      <Container>
        <div className=" px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg"
                >
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;
