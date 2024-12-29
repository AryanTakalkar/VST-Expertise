import { Users } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Users className="text-emerald-600" size={32} />
            <span className="font-bold text-xl text-gray-800">
              VST Expertise
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Contact
            </a>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
