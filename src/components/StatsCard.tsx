import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  number: string;
  text: string;
}

const StatsCard = ({ icon: Icon, number, text }: StatsCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-skew-x-2 transition-all duration-300">
      <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="text-emerald-600" size={32} />
      </div>
      <h3 className="text-3xl font-bold text-emerald-600 mb-2">{number}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default StatsCard;