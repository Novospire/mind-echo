import React, { useState } from 'react';
import { useConsent } from '../../contexts/ConsentContext';
import { X, Shield, Cookie, Info } from 'lucide-react';

const ConsentBanner: React.FC = () => {
  const { consent, updateConsent } = useConsent();
  const [isVisible, setIsVisible] = useState(!consent.hasGivenInitialConsent);

  const handleAcceptAll = () => {
    updateConsent('gdprConsent', true);
    updateConsent('cookiesConsent', true);
    updateConsent('dataProcessingConsent', true);
    updateConsent('medicalDisclaimer', true);
    updateConsent('hasGivenInitialConsent', true);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    updateConsent('gdprConsent', false);
    updateConsent('cookiesConsent', false);
    updateConsent('dataProcessingConsent', false);
    updateConsent('medicalDisclaimer', true); // Medical disclaimer must always be accepted
    updateConsent('hasGivenInitialConsent', true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Gizlilik ve Veri Koruma
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {/* Medical Disclaimer - Always required */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">
                    ⚠️ Önemli Tıbbi Uyarı (Zorunlu)
                  </h3>
                  <p className="text-sm text-red-700 leading-relaxed">
                    Bu uygulama tıbbi teşhis koymaz, tedavi öneremez ve profesyonel 
                    sağlık hizmeti yerine geçmez. Herhangi bir sağlık sorununuz için 
                    mutlaka uzman hekim görüşü alınız.
                  </p>
                </div>
              </div>
            </div>

            {/* GDPR/KVKK Consent */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                KVKK Kapsamında Veri İşleme
              </h3>
              <p className="text-sm text-blue-700 mb-3">
                Kişisel verilerinizin işlenmesi için açık rızanız gerekmektedir. 
                Bu rızayı istediğiniz zaman geri çekebilirsiniz.
              </p>
              <ul className="text-xs text-blue-600 space-y-1 ml-4">
                <li>• Anonim kullanım verilerinin analizi</li>
                <li>• Uygulama geliştirme ve iyileştirme</li>
                <li>• Güvenlik ve performans takibi</li>
              </ul>
            </div>

            {/* Cookie Consent */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-800 mb-2 flex items-center">
                <Cookie className="w-5 h-5 mr-2" />
                Çerez (Cookie) Kullanımı
              </h3>
              <p className="text-sm text-amber-700">
                Sadece teknik çerezler kullanıyoruz. Reklam veya takip çerezleri yoktur.
                Bu çerezler uygulamanın düzgün çalışması için gereklidir.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={handleAcceptAll}
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium 
                       hover:bg-green-700 transition-colors text-base"
            >
              Hepsini Kabul Et
            </button>
            
            <button
              onClick={handleRejectAll}
              className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium 
                       hover:bg-gray-300 transition-colors text-base"
            >
              Sadece Zorunlu
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            Detaylı bilgi için{' '}
            <a href="#" className="text-green-600 hover:underline">
              Gizlilik Politikamızı
            </a>{' '}
            inceleyebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;