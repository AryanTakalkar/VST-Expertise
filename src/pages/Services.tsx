import { Users, Briefcase, CheckCircle2, LineChart, Building2, HeartHandshake } from 'lucide-react';
import ServiceDetailCard from '../components/cards/ServiceDetailCard';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-emerald-700 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">Our Services</h1>
          <p className="text-emerald-100 text-xl text-center max-w-3xl mx-auto">
            Comprehensive manpower solutions tailored to meet your organization's unique needs and challenges.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceDetailCard
              icon={Users}
              title="Permanent Staffing"
              description="Find and hire top-tier permanent employees across various roles and industries."
              features={[
                "Comprehensive candidate screening",
                "Skills assessment",
                "Cultural fit evaluation",
                "Long-term placement guarantee"
              ]}
            />
            
            <ServiceDetailCard
              icon={Briefcase}
              title="Contract Staffing"
              description="Flexible staffing solutions for project-based needs and temporary requirements."
              features={[
                "Quick deployment",
                "Skilled professionals",
                "Flexible contract terms",
                "Project-based hiring"
              ]}
            />
            
            <ServiceDetailCard
              icon={CheckCircle2}
              title="Executive Search"
              description="Specialized recruitment service for senior management and leadership roles."
              features={[
                "C-level recruitment",
                "Industry-specific expertise",
                "Confidential search",
                "Leadership assessment"
              ]}
            />
            
            <ServiceDetailCard
              icon={LineChart}
              title="HR Consulting"
              description="Strategic HR solutions to optimize your workforce management."
              features={[
                "HR policy development",
                "Performance management",
                "Compensation planning",
                "Employee engagement"
              ]}
            />
            
            <ServiceDetailCard
              icon={Building2}
              title="Campus Recruitment"
              description="Connect with fresh talent through our campus recruitment programs."
              features={[
                "University partnerships",
                "Campus drives",
                "Graduate programs",
                "Training solutions"
              ]}
            />
            
            <ServiceDetailCard
              icon={HeartHandshake}
              title="RPO Services"
              description="End-to-end recruitment process outsourcing for efficient hiring."
              features={[
                "Complete recruitment management",
                "Scalable solutions",
                "Cost optimization",
                "Quality metrics"
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;