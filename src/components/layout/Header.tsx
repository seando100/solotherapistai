import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SoloTherapistLogo from "@/components/branding/SoloTherapistLogo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <SoloTherapistLogo />
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-700">
            <Link to="/features" className="hover:text-black transition-colors">Features</Link>
            <Link to="/benefits" className="hover:text-black transition-colors">Benefits</Link>
            <Link to="/pricing" className="hover:text-black transition-colors">Pricing</Link>
            <Link to="/faq" className="hover:text-black transition-colors">FAQ</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="/#waitlist"
              className="bg-[#0F2745] text-white text-sm px-4 py-2 rounded-md hover:bg-[#0C2038] transition"
            >
              Join the Waitlist
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-700 hover:text-black transition"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link to="/features" className="text-sm text-gray-700 hover:text-black transition-colors py-1" onClick={() => setIsOpen(false)}>Features</Link>
            <Link to="/benefits" className="text-sm text-gray-700 hover:text-black transition-colors py-1" onClick={() => setIsOpen(false)}>Benefits</Link>
            <Link to="/pricing" className="text-sm text-gray-700 hover:text-black transition-colors py-1" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link to="/faq" className="text-sm text-gray-700 hover:text-black transition-colors py-1" onClick={() => setIsOpen(false)}>FAQ</Link>
            <a
              href="/#waitlist"
              className="bg-[#0F2745] text-white text-sm px-4 py-3 rounded-md hover:bg-[#0C2038] transition text-center"
              onClick={() => setIsOpen(false)}
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
