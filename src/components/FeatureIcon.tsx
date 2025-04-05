
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
        "flex flex-col items-center justify-center p-6 rounded-full transition-all",
        "bg-white hover:bg-gray-50 w-full",
        "text-[#2A3A4A]",
        className
      )}
    >
      <Icon size={32} strokeWidth={1.5} className="mb-4" />
      <span className="text-lg font-medium text-center">{label}</span>
    </button>
  );
};

export default FeatureIcon;
