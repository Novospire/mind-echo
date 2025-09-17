import React from 'react';
import { Heart, Shield, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Heart className="w-4 h-4 mr-2 text-red-500" />
              Destek & Yardım
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="tel:112" className="hover:text-green-600 transition-colors">
                  Acil Durum: 112
                </a>
              </li>
              <li>
                <a href="tel:444" className="hover:text-green-600 transition-colors">
                  Alzheimer Derneği: 444 2 596
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Uzman Desteği
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="w-4 h-4 mr-2 text-blue-500" />
              Yasal Bilgiler
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Kullanım Şartları
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  KVKK Aydınlatma Metni
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Hakkında</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Mind Echo, unutkanlık farkındalığına yardımcı olan, teşhis koymayan 
              dijital eşlikçinizdir. Zihinsel refahınız için tasarlandı.
            </p>
            <p className="text-xs text-gray-500">
              © 2025 Mind Echo. Tüm hakları saklıdır.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800 font-medium text-center">
              ⚠️ ÖNEMLİ: Bu uygulama tıbbi teşhis koymaz ve profesyonel sağlık hizmeti yerine geçmez.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;