import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { useConsent } from '../contexts/ConsentContext';
import { Leaf, User, Users, ArrowRight, Shield, Heart } from 'lucide-react';

interface UserForm {
  name: string;
  type: 'patient' | 'family';
  isAnonymous: boolean;
  email?: string;
}

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useApp();
  const { consent } = useConsent();
  const [currentStep, setCurrentStep] = useState(1);
  const [userForm, setUserForm] = useState<UserForm>({
    name: '',
    type: 'patient',
    isAnonymous: true,
    email: '',
  });

  const handleUserTypeSelect = (type: 'patient' | 'family') => {
    setUserForm({ ...userForm, type });
    setCurrentStep(2);
  };

  const handleAnonymousToggle = (isAnonymous: boolean) => {
    setUserForm({ ...userForm, isAnonymous });
    setCurrentStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent.hasGivenInitialConsent) {
      alert('Lütfen önce gizlilik politikasını kabul edin.');
      return;
    }

    const user = {
      id: Date.now().toString(),
      name: userForm.name || (userForm.isAnonymous ? 'Anonim Kullanıcı' : 'Kullanıcı'),
      type: userForm.type,
      isAnonymous: userForm.isAnonymous,
      createdAt: new Date(),
    };

    dispatch({ type: 'SET_USER', payload: user });
    navigate('/app/dashboard');
  };

  if (!consent.hasGivenInitialConsent) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Mind Echo</h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Zihinsel refah yolculuğunuza başlamadan önce gizlilik politikamızı 
              kabul etmeniz gerekmektedir.
            </p>
            <p className="text-sm text-yellow-700 bg-yellow-50 p-3 rounded-lg">
              Lütfen açılan gizlilik penceresini kontrol edin.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6">
            <Leaf className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mind Echo</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Zihinsel refah ve hafıza takip yolculuğunuza hoş geldiniz
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Progress indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex space-x-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full ${
                    step <= currentStep
                      ? 'bg-green-500'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {currentStep === 1 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Kim olduğunuzu belirtin
              </h2>
              <p className="text-gray-600 mb-8">
                Size daha iyi hizmet verebilmemiz için hangi kategoride olduğunuzu seçin:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <button
                  onClick={() => handleUserTypeSelect('patient')}
                  className="p-8 border-2 border-gray-200 rounded-xl hover:border-green-500 
                           hover:bg-green-50 transition-all duration-200 group"
                >
                  <User className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Ben kendim için kullanacağım
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Kendi zihinsel refahımı takip etmek istiyorum
                  </p>
                </button>

                <button
                  onClick={() => handleUserTypeSelect('family')}
                  className="p-8 border-2 border-gray-200 rounded-xl hover:border-blue-500 
                           hover:bg-blue-50 transition-all duration-200 group"
                >
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Yakınım için kullanacağım
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sevdiklerimin zihinsel refahını takip etmek istiyorum
                  </p>
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Gizlilik tercihiniz?
              </h2>
              <p className="text-gray-600 mb-8">
                Verilerinizin nasıl saklanacağını seçin:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <button
                  onClick={() => handleAnonymousToggle(true)}
                  className="p-8 border-2 border-gray-200 rounded-xl hover:border-green-500 
                           hover:bg-green-50 transition-all duration-200"
                >
                  <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Anonim Kullanım
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sadece bir rumuz kullanarak, kişisel bilgilerim saklanmasın
                  </p>
                </button>

                <button
                  onClick={() => handleAnonymousToggle(false)}
                  className="p-8 border-2 border-gray-200 rounded-xl hover:border-blue-500 
                           hover:bg-blue-50 transition-all duration-200"
                >
                  <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Kişisel Profil
                  </h3>
                  <p className="text-gray-600 text-sm">
                    İlerlememin kaydedilmesi ve kişiselleştirilmiş deneyim
                  </p>
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Son adım
                </h2>
                <p className="text-gray-600">
                  {userForm.isAnonymous 
                    ? 'Size nasıl hitap edelim?' 
                    : 'Bilgilerinizi girin'
                  }
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {userForm.isAnonymous ? 'Rumuz (İsteğe bağlı)' : 'Adınız'}
                </label>
                <input
                  type="text"
                  value={userForm.name}
                  onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
                  className="w-full p-4 text-lg border border-gray-300 rounded-xl focus:ring-2 
                           focus:ring-green-500 focus:border-transparent"
                  placeholder={
                    userForm.isAnonymous 
                      ? 'Örn: Bahçıvan, Yolcu, Öğrenci...' 
                      : 'Adınızı girin'
                  }
                />
              </div>

              {!userForm.isAnonymous && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta (İsteğe bağlı)
                  </label>
                  <input
                    type="email"
                    value={userForm.email}
                    onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                    className="w-full p-4 text-lg border border-gray-300 rounded-xl focus:ring-2 
                             focus:ring-green-500 focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>
              )}

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  ⚠️ Hatırlatma: Bu uygulama tıbbi teşhis koymaz ve profesyonel sağlık 
                  hizmeti yerine geçmez.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white 
                         p-4 text-lg font-semibold rounded-xl hover:from-green-600 
                         hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Yolculuğa Başla</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;