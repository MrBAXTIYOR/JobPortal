import {
  LayoutGrid,
  Briefcase,
  Bookmark,
  Bell,
  Settings,
  LogOut,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { icon: <LayoutGrid size={20} />, text: 'Overview', to: '/dashboard' },
    {
      icon: <Briefcase size={20} />,
      text: 'Applied Jobs',
      to: '/dashboard/applied-jobs',
    },
    {
      icon: <Bookmark size={20} />,
      text: 'Favorite Jobs',
      to: '/dashboard/favorite-jobs',
    },
    { icon: <Bell size={20} />, text: 'Job Alert', to: '/dashboard/job-alert' },
    {
      icon: <Settings size={20} />,
      text: 'Settings',
      to: '/dashboard/settings',
    },
  ];

  return (
    <div className="w-64 bg-white h-screen p-4 border-r hidden md:block">
      <div className="mb-8 text-gray-500 font-medium">CANDIDATE DASHBOARD</div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            to={item.to}
            className={`flex items-center space-x-3 p-3 rounded-lg ${
              location.pathname === item.to
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {item.icon}
              <span>{item.text}</span>
          </Link>
        ))}
      </nav>
      <div className="absolute -bottom-16">
        <button className="flex items-center  space-x-2 text-gray-600 hover:text-gray-800">
          <LogOut size={20} />
          <span>Log-out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
