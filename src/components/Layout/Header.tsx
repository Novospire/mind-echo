import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { state, dispatch } = useApp();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <header className="bg-white shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 🔹 Logo + Yazı */}
          <div className="flex items-center space-x-3">
            <img 
              src="/mindechologo.png" 
              alt="MindEcho Logo" 
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Mind Echo</h1>
              <p className="text-xs text-gray-500">Zihinsel Refah Eşlikçiniz</p>
            </div>
          </div>

          {/* 🔹 Sağ taraf (kullanıcı + ayarlar + çıkış) */}
          <div className="flex items-center space-x-4">
            {state.user && (
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  Merhaba, {state.user.name}
                </p>
                <p className="text-xs text-gray-500">
                  {state.user.type === 'patient' ? 'Hasta' : 'Aile Yakını'}
                </p>
              </div>
            )}
            
            <div className="flex items-center space-x-2">
              <Link
                to="/app/settings"
                className="p-2 text-gray-600 hover:text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                aria-label="Ayarlar"
              >
                <Settings className="w-5 h-5" />
              </Link>
              
              <button
                onClick={handleLogout}
                className="p-2 text-gray-600 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                aria-label="Çıkış Yap"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
