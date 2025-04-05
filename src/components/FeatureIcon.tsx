
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureIconProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  className?: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({
  icon: Icon,
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center p-6 rounded-xl transition-all",
        "bg-white hover:bg-gray-50 w-full shadow-sm",
        "text-[#2A3A4A] border border-gray-100",
        className
      )}
    >
      <Icon size={32} strokeWidth={1.5} className="mb-4 text-corporate-700" />
      <span className="text-lg font-medium text-center">{label}</span>
    </button>
  );
};

export default FeatureIcon;
