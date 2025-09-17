import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { useConsent } from '../contexts/ConsentContext';
import { 
  User, 
  Bell, 
  Shield, 
  Type, 
  Contrast, 
  Globe, 
  Download, 
  Trash2,
  Eye,
  EyeOff,
  Lock
} from 'lucide-react';

const Settings: React.FC = () => {
  const { state, dispatch } = useApp();
  const { consent, updateConsent, resetConsent } = useConsent();
  const [showDataExport, setShowDataExport] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isPrivacyMode, setIsPrivacyMode] = useState(false);

  const handleSettingChange = (setting: string, value: any) => {
    dispatch({ 
      type: 'UPDATE_SETTINGS', 
      payload: { [setting]: value }
    });
  };

  const handleDataExport = () => {
    const exportData = {
      user: { ...state.user, email: undefined }, // Remove sensitive data
      settings: state.settings,
      exerciseProgress: state.exerciseProgress,
      testScores: state.testScores,
      dailyMood: state.dailyMood,
      exportDate: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mind-echo-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setShowDataExport(false);
  };

  const handleDeleteAllData = () => {
    dispatch({ type: 'LOGOUT' });
    resetConsent();
    localStorage.clear();
    setShowDeleteConfirm(false);
    window.location.href = '/';
  };

  const fontSizes = [
    { id: 'normal', label: 'Normal', class: 'text-base' },
    { id: 'large', label: 'Büyük', class: 'text-lg' },
    { id: 'xlarge', label: 'Çok Büyük', class: 'text-xl' },
  ];

  const contrastModes = [
    { id: 'normal', label: 'Normal' },
    { id: 'high', label: 'Yüksek Kontrast' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Ayarlar ve Gizlilik
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Uygulama tercihlerinizi yönetin ve verilerinizi kontrol edin
        </p>
      </div>

      {/* Privacy Mode Toggle */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Lock className="w-6 h-6 text-purple-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Gizlilik Modu</h3>
              <p className="text-sm text-gray-600">
                Uygulama verilerini ekstra koruma altına alın
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setIsPrivacyMode(!isPrivacyMode)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isPrivacyMode ? 'bg-purple-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isPrivacyMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* User Profile */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <User className="w-6 h-6 mr-3 text-blue-600" />
          Profil Bilgileri
        </h2>
        
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                İsim / Rumuz
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={state.user?.name || ''}
                  className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  readOnly
                />
                {isPrivacyMode ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kullanıcı Tipi
              </label>
              <input
                type="text"
                value={state.user?.type === 'patient' ? 'Hasta' : 'Aile Yakını'}
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50"
                readOnly
              />
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-700">
              <strong>Gizlilik:</strong> {state.user?.isAnonymous ? 'Anonim kullanım' : 'Kişisel profil'}
            </p>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <Bell className="w-6 h-6 mr-3 text-green-600" />
          Bildirim Ayarları
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">Egzersiz Hatırlatıcıları</h3>
              <p className="text-sm text-gray-600">Günlük egzersiz bildirimleri</p>
            </div>
            <button
              onClick={() => handleSettingChange('notifications', !state.settings.notifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                state.settings.notifications ? 'bg-green-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  state.settings.notifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">İlerleme Raporları</h3>
              <p className="text-sm text-gray-600">Haftalık gelişim özetleri</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Accessibility Settings */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <Type className="w-6 h-6 mr-3 text-purple-600" />
          Erişilebilirlik
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Font Boyutu</h3>
            <div className="grid grid-cols-3 gap-3">
              {fontSizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => handleSettingChange('fontSize', size.id)}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    state.settings.fontSize === size.id
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={size.class}>Aa</div>
                  <div className="text-sm">{size.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-3">Kontrast</h3>
            <div className="grid grid-cols-2 gap-3">
              {contrastModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => handleSettingChange('contrast', mode.id)}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    state.settings.contrast === mode.id
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Contrast className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">{mode.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Privacy and Data */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <Shield className="w-6 h-6 mr-3 text-red-600" />
          Gizlilik ve Veri Yönetimi
        </h2>
        
        <div className="space-y-6">
          {/* Consent Management */}
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Veri İşleme İzinleri</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">KVKK Rızası</h4>
                  <p className="text-sm text-gray-600">Kişisel veri işleme izni</p>
                </div>
                <button
                  onClick={() => updateConsent('gdprConsent', !consent.gdprConsent)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    consent.gdprConsent ? 'bg-green-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      consent.gdprConsent ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Çerez İzni</h4>
                  <p className="text-sm text-gray-600">Teknik çerezler için</p>
                </div>
                <button
                  onClick={() => updateConsent('cookiesConsent', !consent.cookiesConsent)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    consent.cookiesConsent ? 'bg-green-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      consent.cookiesConsent ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Data Actions */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">Veri İşlemleri</h3>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowDataExport(true)}
                className="flex-1 bg-blue-50 text-blue-700 px-4 py-3 rounded-xl font-medium hover:bg-blue-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Verilerimi İndir</span>
              </button>
              
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="flex-1 bg-red-50 text-red-700 px-4 py-3 rounded-xl font-medium hover:bg-red-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Trash2 className="w-5 h-5" />
                <span>Tüm Verileri Sil</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Language Settings */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <Globe className="w-6 h-6 mr-3 text-indigo-600" />
          Dil ve Bölge
        </h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Uygulama Dili
          </label>
          <select
            value={state.settings.language}
            onChange={(e) => handleSettingChange('language', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* Data Export Modal */}
      {showDataExport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Veri Dışa Aktarımı
            </h3>
            <p className="text-gray-600 mb-6">
              Tüm verileriniz JSON formatında indirilecek. Bu veriler kişisel 
              bilgilerinizi içermez ve tamamen anonimdir.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800">
                <strong>İçerik:</strong> Egzersiz skorları, test sonuçları, 
                ruh hali kayıtları ve uygulama tercihleri
              </p>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDataExport(false)}
                className="flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-xl font-medium hover:bg-gray-300"
              >
                İptal
              </button>
              <button
                onClick={handleDataExport}
                className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700"
              >
                İndir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-red-900 mb-4">
              Tüm Verileri Sil
            </h3>
            <p className="text-gray-600 mb-6">
              Bu işlem geri alınamaz! Tüm egzersiz skorlarınız, test sonuçlarınız 
              ve kişisel verileriniz kalıcı olarak silinecek.
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-red-800">
                <strong>Uyarı:</strong> Bu işlemden sonra uygulamaya tekrar 
                giriş yapmanız gerekecek ve tüm ilerlemeniz sıfırlanacak.
              </p>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-xl font-medium hover:bg-gray-300"
              >
                İptal
              </button>
              <button
                onClick={handleDeleteAllData}
                className="flex-1 py-3 px-4 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700"
              >
                Evet, Sil
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;