import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Brain, 
  Target, 
  BookOpen, 
  TrendingUp, 
  Bell,
  Leaf,
  Sun,
  Compass
} from 'lucide-react';

const Navigation: React.FC = () => {
  const navItems = [
    { path: '/app/dashboard', icon: Home, label: 'Ana Sayfa', description: 'Günlük özet' },
    { path: '/app/exercises', icon: Brain, label: 'Egzersizler', description: 'Beyin oyunları' },
    { path: '/app/tests', icon: Target, label: 'Testler', description: 'Farkındalık testleri' },
    { path: '/app/education', icon: BookOpen, label: 'Eğitim', description: 'Uzman rehberi' },
    { path: '/app/progress', icon: TrendingUp, label: 'İlerleme', description: 'Gelişim takibi' },
    { path: '/app/reminders', icon: Bell, label: 'Hatırlatıcılar', description: 'Destek sistemi' },
  ];

  return (
    <nav className="bg-white lg:bg-transparent p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-green-100 to-blue-100 text-green-700 shadow-sm'
                  : 'text-gray-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:text-green-600'
              }`
            }
          >
            <item.icon className="w-6 h-6 flex-shrink-0" />
            <div className="hidden lg:block min-w-0">
              <div className="font-medium text-base">{item.label}</div>
              <div className="text-xs opacity-75">{item.description}</div>
            </div>
            <div className="lg:hidden text-center">
              <div className="font-medium text-sm">{item.label}</div>
            </div>
          </NavLink>
        ))}
      </div>
      
      {/* Nature inspiration quote */}
      <div className="hidden lg:block mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <Leaf className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium text-green-700">Günün İlhamı</span>
        </div>
        <p className="text-xs text-green-600 leading-relaxed">
          "Her yeni gün, zihnimizde yeni yollar açmanın fırsatıdır."
        </p>
      </div>
    </nav>
  );
};

export default Navigation;