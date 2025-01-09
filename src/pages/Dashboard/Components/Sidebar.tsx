import {
  LayoutGrid,
  Briefcase,
  Bookmark,
  Bell,
  Settings,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutGrid size={20} />, text: 'Overview', active: true },
    { icon: <Briefcase size={20} />, text: 'Applied Jobs' },
    { icon: <Bookmark size={20} />, text: 'Favorite Jobs' },
    { icon: <Bell size={20} />, text: 'Job Alert' },
    { icon: <Settings size={20} />, text: 'Settings' },
  ];

  return (
    <div className="w-64 bg-white h-screen p-4 border-r hidden md:block">
      <div className="mb-8 text-gray-500 font-medium">CANDIDATE DASHBOARD</div>
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center space-x-3 p-3 rounded-lg ${
              item.active
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {item.icon}
            <span>{item.text}</span>
          </a>
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
