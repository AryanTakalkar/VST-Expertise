import {
  Users,
  Building2,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import StatsCard from "../components/StatsCard";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-green-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Empowering Businesses with Expert Manpower Solutions
            </h1>
            <p className="text-emerald-100 text-xl mb-8">
              VST Expertise delivers top-tier talent across industries, helping
              organizations scale efficiently and succeed.
            </p>
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-emerald-50 transition-colors">
              Get Started <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatsCard icon={Users} number="500+" text="Successful Placements" />
          <StatsCard icon={Building2} number="100+" text="Client Companies" />
          <StatsCard icon={Trophy} number="15+" text="Years Experience" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Permanent Staffing"
              description="Find the perfect long-term talent for your organization"
              icon={Users}
            />
            <ServiceCard
              title="Contract Staffing"
              description="Flexible workforce solutions for project-based needs"
              icon={Briefcase}
            />
            <ServiceCard
              title="Executive Search"
              description="Premium recruitment for senior leadership roles"
              icon={CheckCircle2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how VST Expertise can help you find the perfect talent
            for your organization.
          </p>
          <button className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
