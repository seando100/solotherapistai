import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="border-t border-gray-100 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
                <circle cx="5.5" cy="5.5" r="4.5" fill="#0F2745"/><circle cx="16" cy="5.5" r="4.5" fill="#0F2745"/><circle cx="26.5" cy="5.5" r="4.5" fill="#0F2745"/>
                <circle cx="5.5" cy="16" r="4.5" fill="#0F2745"/><circle cx="16" cy="16" r="4.5" fill="#EC4899"/><circle cx="26.5" cy="16" r="4.5" fill="#0F2745"/>
                <circle cx="5.5" cy="26.5" r="4.5" fill="#0F2745"/><circle cx="16" cy="26.5" r="4.5" fill="#0F2745"/><circle cx="26.5" cy="26.5" r="4.5" fill="#0F2745"/>
              </svg>
              <span className="text-xl font-semibold tracking-tight text-[#0F2745]">
                Solo<span className="text-[#EC4899]">Therapist</span>AI
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">AI-powered client intake for mental health professionals.</p>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-black transition-colors">Privacy</Link>
            <Link to="/terms" className="text-sm text-gray-600 hover:text-black transition-colors">Terms</Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-8">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} SoloSolutionsAI. All rights reserved.
          </p>
          <a href="https://www.solosolutionsai.com" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            A SoloSolutionsAI Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
