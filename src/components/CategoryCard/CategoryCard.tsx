import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  jobCount: number;
}

const CategoryCard = ({ icon: Icon, title, jobCount }: CategoryCardProps) => {
  return (
    <div className="group bg-[#FFFFFF] p-6 rounded-lg  hover:shadow-md  transition duration-500">
      <div className="flex items-center mb-4">
        <div className="bg-[#E7F0FA] rounded-md p-2 w-[68px] h-[68px] flex items-center justify-center group-hover:bg-blue-600 duration-500">
          <Icon className="  group-hover:text-white text-blue-600" />
        </div>
        <div className="ml-4">
          <h3 className="font-semibold group-hover:text-blue-600 duration-500">{title}</h3>
          <p className="text-sm text-gray-600">{jobCount} open positions</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
