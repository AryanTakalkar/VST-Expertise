import { Link, useLocation } from "react-router-dom";
import { Users } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Users className="text-emerald-600" size={32} />
            <span className="font-bold text-xl text-gray-800">
              VST Expertise
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-emerald-600" : "text-gray-600"
              } hover:text-emerald-600 transition-colors`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`${
                isActive("/services") ? "text-emerald-600" : "text-gray-600"
              } hover:text-emerald-600 transition-colors`}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className={`${
                isActive("/projects") ? "text-emerald-600" : "text-gray-600"
              } hover:text-emerald-600 transition-colors`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-emerald-600" : "text-gray-600"
              } hover:text-emerald-600 transition-colors`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
