import React from 'react';
import { Briefcase, Bookmark, Bell } from 'lucide-react';

interface StatCardProps {
  type: 'applied' | 'favorite' | 'alerts';
  count: number;
}

const StatCard: React.FC<StatCardProps> = ({ type, count }) => {
  const cardConfig = {
    applied: {
      title: 'Applied Jobs',
      icon: <Briefcase className="text-blue-600" />,
      bgColor: 'bg-blue-50',
    },
    favorite: {
      title: 'Favorite Jobs',
      icon: <Bookmark className="text-yellow-600" />,
      bgColor: 'bg-yellow-50',
    },
    alerts: {
      title: 'Job Alerts',
      icon: <Bell className="text-green-600" />,
      bgColor: 'bg-green-50',
    },
  };

  const config = cardConfig[type];

  return (
    <div className={`${config.bgColor} p-4 rounded-lg`}>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-3xl font-semibold mb-1">{count}</div>
          <div className="text-gray-600">{config.title}</div>
        </div>
        {config.icon}
      </div>
    </div>
  );
};

export default StatCard;