import { Link } from 'react-router-dom';
import { Users, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users className="text-emerald-400" size={32} />
              <span className="font-bold text-xl">VST Expertise</span>
            </div>
            <p className="text-gray-400">
              Empowering businesses with expert manpower solutions since 2008.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</Link>
              <Link to="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">Services</Link>
              <Link to="/projects" className="text-gray-400 hover:text-emerald-400 transition-colors">Projects</Link>
              <Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <div className="flex flex-col gap-2">
              <Link to="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">Permanent Staffing</Link>
              <Link to="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">Contract Staffing</Link>
              <Link to="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">Executive Search</Link>
              <Link to="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">HR Consulting</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-emerald-400" />
                <span className="text-gray-400">123 Business Avenue, Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-emerald-400" />
                <span className="text-gray-400">+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-emerald-400" />
                <span className="text-gray-400">contact@vstexpertise.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VST Expertise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;