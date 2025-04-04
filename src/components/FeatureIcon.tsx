
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
        "bg-white hover:bg-gray-50 shadow-sm hover:shadow-md",
        "w-64 h-40 md:w-72 md:h-44",
        "text-corporate-900 hover:text-corporate-600",
        className
      )}
    >
      <Icon size={48} strokeWidth={1.5} className="mb-4 animate-pulse-slow" />
      <span className="text-lg font-medium text-center">{label}</span>
    </button>
  );
};

export default FeatureIcon;
