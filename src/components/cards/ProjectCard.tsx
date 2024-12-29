import { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
  stats: {
    placements: number;
    duration: string;
    satisfaction: string;
  };
}

const ProjectCard = ({ title, category, icon: Icon, description, stats }: ProjectCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-emerald-100 p-3 rounded-lg">
          <Icon className="text-emerald-600" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <span className="text-emerald-600 text-sm">{category}</span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="grid grid-cols-3 gap-4 border-t pt-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-600">{stats.placements}+</div>
          <div className="text-sm text-gray-600">Placements</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-600">{stats.duration}</div>
          <div className="text-sm text-gray-600">Duration</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-600">{stats.satisfaction}</div>
          <div className="text-sm text-gray-600">Satisfaction</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;