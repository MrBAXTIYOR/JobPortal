import { MapPin } from 'lucide-react';

interface CompanyCardProps {
  name: string;
  location: string;
  openPositions: number;
  isFeatured?: boolean;
  logoUrl: string;
}

export function CompanyCard({
  name,
  location,
  openPositions,
  isFeatured = false,
  logoUrl,
}: CompanyCardProps) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-[#EA4C89] rounded-lg flex items-center justify-center flex-shrink-0">
          <img src={logoUrl} alt={name} className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-lg">{name}</h3>
            {isFeatured && (
              <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs rounded">
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>
      </div>
      <button className="w-full py-2 px-4 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded transition-colors text-sm">
        Open Position ({openPositions})
      </button>
    </div>
  );
}
