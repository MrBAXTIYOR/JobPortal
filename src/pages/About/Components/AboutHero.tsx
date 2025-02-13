import React from 'react';
import { Briefcase, Building2, Users } from 'lucide-react';
import StatCard from './StatCard';

const AboutHero: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 mt-12">
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-blue-600 font-medium">Who we are</p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            We're highly skilled and professionals team.
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam.
          Aliquam metus mauris, semper eu eros vitae, blandit tristique metus.
          Vestibulum maximus nec justo sed maximus.
        </p>
      </div>
      <div className="space-y-8">
        <StatCard
          icon={<Briefcase className="w-6 h-6 text-blue-600" />}
          value="1,75,324"
          label="Live Job"
        />
        <StatCard
          icon={<Building2 className="w-6 h-6 text-blue-600" />}
          value="97,354"
          label="Companies"
        />
        <StatCard
          icon={<Users className="w-6 h-6 text-blue-600" />}
          value="38,47,154"
          label="Candidates"
        />
      </div>
      <div className="lg:col-span-2 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            className="h-8 object-contain opacity-50"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google Logo"
            className="h-8 object-contain opacity-50"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Apple_logo_black.svg"
            alt="Apple Logo"
            className="h-8 object-contain opacity-50"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            alt="IBM Logo"
            className="h-8 object-contain opacity-50"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Samsung_Logo.svg"
            alt="Samsung Logo"
            className="h-8 object-contain opacity-50"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/Intel_Logo_%282020%29.svg"
            alt="Intel Logo"
            className="h-8 object-contain opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
