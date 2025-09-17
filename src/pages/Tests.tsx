import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, TrendingUp, Info } from 'lucide-react';

const Tests: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [completedTests, setCompletedTests] = useState<Set<string>>(new Set());
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const tests = [
    {
      id: 'memory-span',
      title: 'Hafıza Aralığı Testi',
      description: 'Kısa süreli hafıza kapasitesini değerlendirir',
      duration: '5-8 dakika',
      difficulty: 'Kolay',
      purpose: 'Günlük işlevsellikte hafıza kullanımınızı gözlemler',
      areas: ['Kısa süreli hafıza', 'Dikkat süresi', 'Bilgi işleme'],
    },
    {
      id: 'attention-test',
      title: 'Dikkat Süresi Testi',
      description: 'Odaklanma ve konsantrasyon becerisini ölçer',
      duration: '7-10 dakika',
      difficulty: 'Orta',
      purpose: 'Günlük aktivitelerdeki dikkat dağınıklığını gözlemler',
      areas: ['Seçici dikkat', 'Sürekli dikkat', 'Bölünmüş dikkat'],
    },
    {
      id: 'orientation-check',
      title: 'Yönelim Kontrolü',
      description: 'Zaman, yer ve kişi yönelimini değerlendirir',
      duration: '3-5 dakika',
      difficulty: 'Kolay',
      purpose: 'Temel yönelim becerilerinizi gözlemler',
      areas: ['Zaman bilinci', 'Mekan algısı', 'Kişisel farkındalık'],
    },
  ];

  const handleTestStart = (testId: string) => {
    if (!showDisclaimer) {
      setSelectedTest(testId);
      // Simulate test completion
      setTimeout(() => {
        setCompletedTests(prev => new Set([...prev, testId]));
        setSelectedTest(null);
      }, 3000);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Kolay': return 'bg-green-100 text-green-800';
      case 'Orta': return 'bg-yellow-100 text-yellow-800';
      case 'Zor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (showDisclaimer) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-10 h-10 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Önemli Uyarı
            </h1>
            <p className="text-lg text-gray-600">
              Farkındalık testlerine başlamadan önce lütfen okuyun
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="font-bold text-red-800 text-xl mb-3 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2" />
                Bu testler teşhis amaçlı değildir
              </h2>
              <ul className="text-red-700 space-y-2 text-sm leading-relaxed">
                <li>• Bu testler sadece kişisel farkındalık amacıyla hazırlanmıştır</li>
                <li>• Herhangi bir tıbbi tanı koymaz veya hastalık belirtisi göstermez</li>
                <li>• Sonuçlar profesyonel değerlendirme yerine geçmez</li>
                <li>• Endişeleriniz varsa mutlaka bir uzman hekime başvurunuz</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                <Info className="w-5 h-5 mr-2" />
                Bu testler ne amaçla kullanılır?
              </h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Kendi zihinsel performansınızı gözlemlemek</li>
                <li>• Günlük yaşamda dikkat çekebilecek değişiklikleri fark etmek</li>
                <li>• Uzman görüşüne ihtiyaç duyup duymadığınızı değerlendirmek</li>
                <li>• Egzersiz programınızın etkilerini takip etmek</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-800 mb-3">
                Ne zaman uzman görüşü almalısınız?
              </h3>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• Günlük yaşamınızı etkileyen unutkanlık yaşıyorsanız</li>
                <li>• Yakınlarınız değişiklik fark ediyorsa</li>
                <li>• Konsantrasyon sorunları işinizi/ilişkilerinizi etkiliyorsa</li>
                <li>• Bu konularda endişe duyuyorsanız</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowDisclaimer(false)}
              className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              Anladım, Devam Et
            </button>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-200 text-gray-800 px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
            >
              Geri Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (selectedTest) {
    const test = tests.find(t => t.id === selectedTest);
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {test?.title} Başlatılıyor...
          </h2>
          <p className="text-gray-600 mb-6">
            Test yaklaşık {test?.duration} sürecek. Lütfen dikkatli bir şekilde cevaplayın.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              💡 İpucu: Rahat bir ortamda, dikkatinizi dağıtacak unsurlar olmadan 
              testi tamamlamaya çalışın.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Farkındalık Testleri
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Zihinsel performansınızı gözlemlemek için tasarlanmış hafif testler. 
          Kendinizi tanımak için güvenli bir başlangıç.
        </p>
      </div>

      {/* Available Tests */}
      <div className="grid lg:grid-cols-2 gap-6">
        {tests.map((test) => (
          <div
            key={test.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">{test.title}</h3>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(test.difficulty)}`}>
                  {test.difficulty}
                </span>
                {completedTests.has(test.id) && (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                )}
              </div>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {test.description}
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>Süre: {test.duration}</span>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Değerlendirme Alanları:</h4>
                <div className="flex flex-wrap gap-2">
                  {test.areas.map((area, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-600 leading-relaxed">
                  <strong>Amaç:</strong> {test.purpose}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleTestStart(test.id)}
              disabled={completedTests.has(test.id)}
              className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                completedTests.has(test.id)
                  ? 'bg-green-100 text-green-700 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
              }`}
            >
              {completedTests.has(test.id) ? (
                <span className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Tamamlandı</span>
                </span>
              ) : (
                'Teste Başla'
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Progress Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
        <div className="text-center">
          <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Test İlerlemeniz
          </h3>
          <p className="text-3xl font-bold text-blue-600 mb-2">
            {completedTests.size} / {tests.length}
          </p>
          <p className="text-gray-600 mb-4">Test tamamlandı</p>
          
          {completedTests.size > 0 && (
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-blue-700">
                📊 Test sonuçlarınız kişisel gelişim takibinizde kullanılacak. 
                Düzenli test yaparak değişimleri gözlemleyebilirsiniz.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Important Reminder */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-yellow-800 mb-2">
              Unutmayın: Bu testler teşhis amaçlı değildir
            </h3>
            <p className="text-sm text-yellow-700 leading-relaxed">
              Herhangi bir endişeniz varsa veya sonuçlarla ilgili sorularınız için 
              mutlaka bir sağlık uzmanına danışın. Bu testler sadece kişisel farkındalık için tasarlanmıştır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tests;