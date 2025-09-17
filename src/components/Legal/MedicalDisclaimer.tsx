import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const MedicalDisclaimer: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) {
    return (
      <div className="bg-yellow-100 border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <button
            onClick={() => setIsMinimized(false)}
            className="flex items-center space-x-2 text-yellow-800 hover:text-yellow-900 text-sm font-medium"
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Tıbbi Uyarı - Görmek için tıklayın</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-yellow-50 border-b border-yellow-200">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-yellow-800 mb-1">
                ⚠️ Önemli: Bu uygulama tıbbi teşhis koymaz
              </p>
              <p className="text-xs text-yellow-700 leading-relaxed">
                Mind Echo, unutkanlık farkındalığına yardımcı olan eğitim amaçlı bir araçtır. 
                Herhangi bir sağlık sorununuz için mutlaka uzman hekim görüşü alınız.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setIsMinimized(true)}
            className="text-yellow-600 hover:text-yellow-800 p-1"
            aria-label="Uyarıyı küçült"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;