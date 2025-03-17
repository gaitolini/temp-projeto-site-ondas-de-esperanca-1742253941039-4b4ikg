import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Ondas de Esperança
              </h1>
              <p className="text-2xl text-white mb-8">
                {t('hero.slogan')}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center space-x-2 transition">
                <Heart className="h-5 w-5" />
                <span>{t('hero.donate')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;