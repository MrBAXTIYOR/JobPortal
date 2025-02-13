import { Plus, X } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const AccordionItem = ({
  title,
  isOpen,
  onToggle,
  children,
}: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-gray-800">{title}</span>
        {isOpen ? (
          <X className="w-5 h-5 text-gray-400" />
        ) : (
          <Plus className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {isOpen && <div className="pb-4 text-gray-600">{children}</div>}
    </div>
  );
};
export default AccordionItem;
