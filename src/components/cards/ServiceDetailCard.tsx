import { LucideIcon } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

interface ServiceDetailCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceDetailCard = ({ icon: Icon, title, description, features }: ServiceDetailCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <div className="bg-emerald-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
        <Icon className="text-emerald-600" size={32} />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={20} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetailCard;