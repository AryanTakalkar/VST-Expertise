import { Users, Award, Target, Heart } from 'lucide-react';
import ValueCard from '../components/cards/ValueCard';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-emerald-700 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">About VST Expertise</h1>
          <p className="text-emerald-100 text-xl text-center max-w-3xl mx-auto">
            Leading the way in manpower solutions with over 15 years of excellence in connecting talented professionals with outstanding organizations.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2008, VST Expertise has grown from a small recruitment agency to one of India's leading manpower solution providers. Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of both employer and employee needs.
            </p>
            <p className="text-gray-600">
              Today, we pride ourselves on our ability to match the right talent with the right opportunities, creating lasting partnerships that drive success for all stakeholders involved.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ValueCard
              icon={Target}
              title="Excellence"
              description="We strive for excellence in every placement and service we provide"
            />
            <ValueCard
              icon={Heart}
              title="Integrity"
              description="We maintain the highest standards of honesty and ethical conduct"
            />
            <ValueCard
              icon={Users}
              title="Partnership"
              description="We build lasting relationships with our clients and candidates"
            />
            <ValueCard
              icon={Award}
              title="Innovation"
              description="We continuously evolve our methods to meet changing market needs"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add TeamMemberCard components here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;