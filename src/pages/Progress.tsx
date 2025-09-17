import React, { useState } from 'react';
import { TrendingUp, Calendar, Brain, Target, Smile, Award, Share2, Download } from 'lucide-react';

const Progress: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('week');
  const [shareMode, setShareMode] = useState<boolean>(false);

  const periods = [
    { id: 'week', label: 'Bu Hafta' },
    { id: 'month', label: 'Bu Ay' },
    { id: 'quarter', label: '3 Ay' },
    { id: 'year', label: 'Bu Yıl' },
  ];

  // Mock data for demonstration
  const progressData = {
    week: {
      exercises: [
        { date: 'Pzt', completed: 3, total: 4 },
        { date: 'Sal', completed: 2, total: 4 },
        { date: 'Çar', completed: 4, total: 4 },
        { date: 'Per', completed: 1, total: 4 },
        { date: 'Cum', completed: 3, total: 4 },
        { date: 'Cmt', completed: 2, total: 4 },
        { date: 'Paz', completed: 0, total: 4 },
      ],
      mood: [
        { date: 'Pzt', score: 3 },
        { date: 'Sal', score: 2 },
        { date: 'Çar', score: 3 },
        { date: 'Per', score: 2 },
        { date: 'Cum', score: 3 },
        { date: 'Cmt', score: 3 },
        { date: 'Paz', score: 0 },
      ],
      tests: {
        completed: 2,
        total: 3,
        scores: {
          memory: 85,
          attention: 78,
          orientation: 92
        }
      }
    }
  };

  const currentData = progressData[selectedPeriod as keyof typeof progressData] || progressData.week;

  const averageExerciseCompletion = Math.round(
    (currentData.exercises.reduce((acc, day) => acc + (day.completed / day.total), 0) / currentData.exercises.length) * 100
  );

  const averageMood = currentData.mood.filter(m => m.score > 0).reduce((acc, m) => acc + m.score, 0) / 
    currentData.mood.filter(m => m.score > 0).length;

  const getMoodColor = (score: number) => {
    if (score === 0) return 'bg-gray-200';
    if (score === 1) return 'bg-red-400';
    if (score === 2) return 'bg-yellow-400';
    return 'bg-green-400';
  };

  const getMoodLabel = (avg: number) => {
    if (avg <= 1.5) return 'Zorlanıyor';
    if (avg <= 2.5) return 'Orta';
    return 'İyi';
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            İlerleme Takibi
          </h1>
          <p className="text-gray-600">
            Zihinsel refah yolculuğunuzdaki gelişiminizi görsel olarak takip edin
          </p>
        </div>

        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <button
            onClick={() => setShareMode(true)}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Share2 className="w-4 h-4" />
            <span>Paylaş</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="w-4 h-4" />
            <span>İndir</span>
          </button>
        </div>
      </div>

      {/* Period Selector */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Zaman Periyodu</h2>
        <div className="flex space-x-2">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedPeriod === period.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Egzersiz Tamamlama</h3>
            <Brain className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-blue-600 mb-2">
            {averageExerciseCompletion}%
          </p>
          <p className="text-sm text-gray-600">Ortalama tamamlama oranı</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Ruh Hali</h3>
            <Smile className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold text-green-600 mb-2">
            {getMoodLabel(averageMood)}
          </p>
          <p className="text-sm text-gray-600">Ortalama günlük ruh hali</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Test Sonuçları</h3>
            <Target className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-3xl font-bold text-purple-600 mb-2">
            {currentData.tests.completed}/{currentData.tests.total}
          </p>
          <p className="text-sm text-gray-600">Tamamlanan testler</p>
        </div>
      </div>

      {/* Exercise Progress Chart */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Brain className="w-5 h-5 mr-2 text-blue-600" />
          Günlük Egzersiz Aktivitesi
        </h2>
        
        <div className="space-y-4">
          {currentData.exercises.map((day, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium text-gray-600">
                {day.date}
              </div>
              
              <div className="flex-1 bg-gray-200 rounded-full h-8 relative">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                  style={{ width: `${(day.completed / day.total) * 100}%` }}
                >
                  {day.completed > 0 && `${day.completed}/${day.total}`}
                </div>
              </div>
              
              <div className="text-sm text-gray-500 min-w-[60px]">
                {Math.round((day.completed / day.total) * 100)}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mood Tracking */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Smile className="w-5 h-5 mr-2 text-green-600" />
          Ruh Hali Takibi
        </h2>
        
        <div className="flex items-end space-x-2 h-32">
          {currentData.mood.map((day, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className={`w-full rounded-t-lg ${getMoodColor(day.score)} transition-all duration-300`}
                style={{ height: day.score > 0 ? `${(day.score / 3) * 100}%` : '8px' }}
              />
              <div className="text-xs text-gray-600 mt-2">{day.date}</div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-6 mt-4 pt-4 border-t">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-400 rounded"></div>
            <span className="text-sm text-gray-600">Zorlanıyor</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-400 rounded"></div>
            <span className="text-sm text-gray-600">Orta</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-400 rounded"></div>
            <span className="text-sm text-gray-600">İyi</span>
          </div>
        </div>
      </div>

      {/* Test Scores */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Target className="w-5 h-5 mr-2 text-purple-600" />
          Test Performans Skorları
        </h2>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Hafıza</span>
              <span className="text-sm font-bold text-purple-600">
                {currentData.tests.scores.memory}/100
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                style={{ width: `${currentData.tests.scores.memory}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Dikkat</span>
              <span className="text-sm font-bold text-blue-600">
                {currentData.tests.scores.attention}/100
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full"
                style={{ width: `${currentData.tests.scores.attention}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Yönelim</span>
              <span className="text-sm font-bold text-green-600">
                {currentData.tests.scores.orientation}/100
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                style={{ width: `${currentData.tests.scores.orientation}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Award className="w-5 h-5 mr-2 text-yellow-600" />
          Başarılarınız
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">7 Günlük Seri</h3>
            <p className="text-sm text-gray-600">Üst üste egzersiz yapma</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Hafıza Ustası</h3>
            <p className="text-sm text-gray-600">10 hafıza egzersizi</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Test Tamamlayıcı</h3>
            <p className="text-sm text-gray-600">Tüm testleri bitirme</p>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {shareMode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              İlerlemeni Paylaş
            </h3>
            <p className="text-gray-600 mb-6">
              Aile yakınlarınızla ilerlemenizi paylaşabilirsiniz. Sadece özet bilgiler paylaşılır.
            </p>
            
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm">Genel ilerleme özeti</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm">Ruh hali değişiklikleri</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm">Egzersiz sıklığı</span>
              </label>
            </div>
            
            <div className="flex space-x-3 mt-8">
              <button
                onClick={() => setShareMode(false)}
                className="flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-xl font-medium hover:bg-gray-300"
              >
                İptal
              </button>
              <button
                onClick={() => setShareMode(false)}
                className="flex-1 py-3 px-4 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700"
              >
                Paylaş
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Progress;