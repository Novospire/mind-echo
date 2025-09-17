import React, { useState } from 'react';
import { Play, Volume2, BookOpen, Users, Brain, Heart, ArrowRight, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('overview');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const categories = [
    { id: 'overview', label: 'Genel Bilgiler', icon: BookOpen },
    { id: 'alzheimer', label: 'Alzheimer ve Demans', icon: Brain },
    { id: 'brain-fog', label: 'Beyin Sisi', icon: Heart },
    { id: 'family', label: 'Aile Rehberi', icon: Users },
  ];

  const content = {
    overview: {
      title: 'Zihinsel Sağlık Hakkında',
      description: 'Unutkanlık ve zihinsel performans hakkında temel bilgiler',
      items: [
        {
          id: 'normal-aging',
          title: 'Normal Yaşlanma vs Patolojik Değişimler',
          description: 'Yaşla birlikte gelen normal değişimler ile hastalık belirtilerini ayırt etme',
          duration: '8 dakika',
          expert: 'Dr. Mehmet Yılmaz - Nörolog',
          hasAudio: true,
        },
        {
          id: 'memory-types',
          title: 'Hafıza Türleri ve İşleyişi',
          description: 'Kısa süreli, uzun süreli hafıza ve çalışma hafızası nasıl çalışır?',
          duration: '12 dakika',
          expert: 'Dr. Ayşe Kara - Nöropsikolog',
          hasAudio: true,
        },
        {
          id: 'lifestyle-factors',
          title: 'Yaşam Tarzının Beyin Sağlığına Etkisi',
          description: 'Beslenme, egzersiz, uyku ve sosyal aktivitelerin önemi',
          duration: '15 dakika',
          expert: 'Dr. Can Özdemir - Geriatri',
          hasAudio: true,
        }
      ]
    },
    alzheimer: {
      title: 'Alzheimer ve Demans',
      description: 'Alzheimer hastalığı ve demans türleri hakkında uzman görüşleri',
      items: [
        {
          id: 'early-signs',
          title: 'Erken Belirtiler ve Uyarı İşaretleri',
          description: 'Hangi belirtiler normal unutkanlıktan farklıdır?',
          duration: '10 dakika',
          expert: 'Dr. Zeynep Aktaş - Nörolog',
          hasAudio: true,
        },
        {
          id: 'diagnosis-process',
          title: 'Tanı Süreci Nasıl İşler?',
          description: 'Doktor hangi testleri yapar ve süreç nasıl ilerler?',
          duration: '14 dakika',
          expert: 'Dr. Ömer Demir - Nörolog',
          hasAudio: true,
        },
        {
          id: 'treatment-options',
          title: 'Tedavi Seçenekleri ve Yaklaşımlar',
          description: 'Mevcut tedaviler ve destekleyici yaklaşımlar',
          duration: '18 dakika',
          expert: 'Dr. Fatma Öztürk - Geriatri',
          hasAudio: true,
        }
      ]
    },
    'brain-fog': {
      title: 'Beyin Sisi (Brain Fog)',
      description: 'Mental bulanıklık, odaklanma güçlüğü ve çözüm yolları',
      items: [
        {
          id: 'what-is-brain-fog',
          title: 'Beyin Sisi Nedir?',
          description: 'Mental yorgunluk, konsantrasyon bozukluğu ve nedenleri',
          duration: '9 dakika',
          expert: 'Dr. Ahmet Yıldız - Nörolog',
          hasAudio: true,
        },
        {
          id: 'causes-solutions',
          title: 'Nedenleri ve Çözüm Yolları',
          description: 'Stress, uyku, beslenme ve diğer faktörler',
          duration: '16 dakika',
          expert: 'Dr. Elif Çelik - Psikiyatrist',
          hasAudio: true,
        },
        {
          id: 'daily-strategies',
          title: 'Günlük Yaşam Stratejileri',
          description: 'Pratik ipuçları ve egzersizler',
          duration: '11 dakika',
          expert: 'Dr. Murat Gündoğdu - Nöropsikolog',
          hasAudio: true,
        }
      ]
    },
    family: {
      title: 'Aile Rehberi',
      description: 'Yakınlarına destek olmak isteyen aileler için rehber',
      items: [
        {
          id: 'supporting-loved-ones',
          title: 'Sevdiklerinize Nasıl Destek Olursunuz?',
          description: 'Empati kurmak, sabırlı olmak ve pratik yardımlar',
          duration: '13 dakika',
          expert: 'Dr. Seda Çoban - Aile Danışmanı',
          hasAudio: true,
        },
        {
          id: 'communication-tips',
          title: 'Etkili İletişim Teknikleri',
          description: 'Unutkanlık yaşayan kişilerle iletişim kurma yolları',
          duration: '10 dakika',
          expert: 'Uzm. Psk. Deniz Ateş',
          hasAudio: true,
        },
        {
          id: 'caregiver-care',
          title: 'Bakım Verenlerin Kendilerini Koruması',
          description: 'Bakım stresi ve tükenmişlikle başa çıkma',
          duration: '12 dakika',
          expert: 'Dr. Hasan Kök - Psikiyatrist',
          hasAudio: true,
        }
      ]
    }
  };

  const currentContent = content[activeCategory as keyof typeof content];

  const handleVideoPlay = (videoId: string) => {
    setPlayingVideo(videoId);
    // Simulate video playing
    setTimeout(() => {
      setPlayingVideo(null);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Eğitim Merkezi
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Uzman doktorlarımız tarafından hazırlanan eğitici içerikler. 
          Doğru bilgiyle güçlenin, farkındalığınızı artırın.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                activeCategory === category.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-600'
              }`}
            >
              <category.icon className="w-8 h-8 mx-auto mb-2" />
              <p className="font-medium text-sm">{category.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {currentContent.title}
          </h2>
          <p className="text-gray-600">
            {currentContent.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {currentContent.items.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 flex-1">
                  {item.title}
                </h3>
                {item.hasAudio && (
                  <Volume2 className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" />
                )}
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Süre:</span>
                  <span className="ml-2">{item.duration}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Uzman:</span>
                  <span className="ml-2">{item.expert}</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => handleVideoPlay(item.id)}
                  disabled={playingVideo === item.id}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                    playingVideo === item.id
                      ? 'bg-green-100 text-green-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                  }`}
                >
                  <Play className="w-5 h-5" />
                  <span>
                    {playingVideo === item.id ? 'Oynatılıyor...' : 'İzle'}
                  </span>
                </button>

                {item.hasAudio && (
                  <button className="p-3 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
                    <Volume2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expert Support Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
        <div className="text-center">
          <Brain className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Uzman Desteği
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Bu içerikler deneyimli nöroloji ve psikiyatri uzmanları tarafından 
            hazırlanmıştır. Doğru bilgiyle güçlenerek, bilinçli kararlar alın.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Uzman Randevu Al</span>
            </a>
            
            <a
              href="#"
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <span>Destek Hattı</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
        <div className="flex items-start space-x-3">
          <Brain className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-yellow-800 mb-2">
              Eğitim Amaçlı İçerik
            </h3>
            <p className="text-sm text-yellow-700 leading-relaxed">
              Bu içerikler genel eğitim amacıyla hazırlanmıştır ve kişisel tıbbi 
              tavsiye yerine geçmez. Sağlık sorunlarınız için mutlaka uzman hekim görüşü alın.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;