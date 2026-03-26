import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSelector({ className = '' }: { className?: string }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <Globe className="h-4 w-4 text-gray-400" />
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`text-xs font-medium px-1.5 py-0.5 rounded transition-colors ${
          currentLang === 'en'
            ? 'bg-[#0F2745] text-white'
            : 'text-gray-500 hover:text-gray-800'
        }`}
      >
        EN
      </button>
      <span className="text-gray-300 text-xs">|</span>
      <button
        onClick={() => i18n.changeLanguage('es')}
        className={`text-xs font-medium px-1.5 py-0.5 rounded transition-colors ${
          currentLang === 'es'
            ? 'bg-[#0F2745] text-white'
            : 'text-gray-500 hover:text-gray-800'
        }`}
      >
        ES
      </button>
    </div>
  );
}
