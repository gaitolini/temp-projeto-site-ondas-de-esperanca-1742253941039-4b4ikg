import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Waves as Wave, Globe } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en');
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Wave className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold text-blue-900">Ondas de Esperança</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">{t('nav.home')}</Link>
            <Link to="/mission" className="text-gray-700 hover:text-blue-600 transition">{t('nav.mission')}</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">{t('nav.contact')}</Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition"
            >
              <Globe className="h-5 w-5" />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;