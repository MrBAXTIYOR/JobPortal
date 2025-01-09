import React from 'react';
import { User, Building } from 'lucide-react';

type UserType = 'candidate' | 'employer';

interface UserTypeSelectorProps {
  selectedType: UserType;
  onTypeSelect: (type: UserType) => void;
}

const UserTypeSelector = ({
  selectedType,
  onTypeSelect,
}: UserTypeSelectorProps) => {
  return (
    <div className="grid grid-cols-2 bg-gray-100 p-1 rounded-md">
      <button
        onClick={() => onTypeSelect('candidate')}
        className={`flex items-center justify-center space-x-2 py-2 px-4 rounded ${
          selectedType === 'candidate'
            ? 'bg-blue-800 text-white shadow-sm'
            : 'hover:bg-gray-200'
        }`}
      >
        <User className="h-5 w-5" />
        <span>Candidate</span>
      </button>
      <button
        onClick={() => onTypeSelect('employer')}
        className={`flex items-center justify-center space-x-2 py-2 px-4 rounded ${
          selectedType === 'employer'
            ? 'bg-blue-800 text-white shadow-sm'
            : 'hover:bg-gray-200'
        }`}
      >
        <Building className="h-5 w-5" />
        <span>Employers</span>
      </button>
    </div>
  );
};

export default UserTypeSelector;
