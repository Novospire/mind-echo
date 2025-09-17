import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { 
  Sun, 
  Brain, 
  Target, 
  TrendingUp, 
  Calendar,
  Smile,
  Meh,
  Frown,
  Star,
  Leaf,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { state, dispatch } = useApp();
  const [selectedMood, setSelectedMood] = useState<number | null>(state.dailyMood);

  const handleMoodSelect = (mood: number) => {
    setSelectedMood(mood);
    dispatch({ type: 'UPDATE_DAILY_MOOD', payload: mood });
  };

  const moodOptions = [
    { value: 1, icon: Frown, label: 'Zorlanıyor', color: 'text-red-500', bgColor: 'bg-red-50' },
    { value: 2, icon: Meh, label: 'Orta', color: 'text-yellow-500', bgColor: 'bg-yellow-50' },
    { value: 3, icon: Smile, label: 'İyi', color: 'text-green-500', bgColor: 'bg-green-50' },
  ];

  const todaysExercises = [
    {
      id: 'memory-match',
      title: 'Hafıza Eşleştirme',
      description: 'Kartları eşleştirerek hafızanızı güçlendirin',
      icon: Brain,
      difficulty: 'Kolay',
      duration: '5 dk',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'attention-focus',
      title: 'Dikkat Odaklama',
      description: 'Renkleri ayırarak odaklanma becerinizi geliştirin',
      icon: Target,
      difficulty: 'Orta',
      duration: '3 dk',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const currentDate = new Date().toLocaleDateString('tr-TR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Merhaba, {state.user?.name}! 
            </h1>
            <p className="text-gray-600 text-lg flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {currentDate}
            </p>
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full">
            <Sun className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Daily Mood Tracker */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Leaf className="w-6 h-6 mr-3 text-green-600" />
          Bugün kendinizi nasıl hissediyorsunuz?
        </h2>
        
        <div className="grid grid-cols-3 gap-4">
          {moodOptions.map((mood) => (
            <button
              key={mood.value}
              onClick={() => handleMoodSelect(mood.value)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedMood === mood.value
                  ? `${mood.bgColor} border-current ${mood.color}`
                  : 'border-gray-200 hover:border-gray-300 text-gray-600'
              }`}
            >
              <mood.icon className="w-12 h-12 mx-auto mb-2" />
              <p className="font-medium text-sm">{mood.label}</p>
            </button>
          ))}
        </div>

        {selectedMood && (
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700">
              Teşekkürler! Bugünkü ruh haliniz kaydedildi. 
              Bu bilgiler ilerleme takibinizde size yardımcı olacak.
            </p>
          </div>
        )}
      </div>

      {/* Today's Exercises */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <Star className="w-6 h-6 mr-3 text-yellow-500" />
            Bugünün Önerilen Egzersizleri
          </h2>
          <Link
            to="/app/exercises"
            className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center"
          >
            Tümünü Gör
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {todaysExercises.map((exercise) => (
            <div
              key={exercise.id}
              className="group cursor-pointer bg-gradient-to-r p-6 rounded-xl text-white relative overflow-hidden hover:scale-105 transition-transform duration-200"
              style={{
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                backgroundImage: `linear-gradient(135deg, ${exercise.color.replace('from-', '').replace(' to-', ', ')})`
              }}
            >
              <div className="relative z-10">
                <exercise.icon className="w-10 h-10 mb-4" />
                <h3 className="text-lg font-bold mb-2">{exercise.title}</h3>
                <p className="text-sm opacity-90 mb-4">{exercise.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    {exercise.difficulty}
                  </span>
                  <span>{exercise.duration}</span>
                </div>
              </div>
              
              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <exercise.icon className="w-full h-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Bu Hafta</h3>
            <Brain className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-blue-600">12</p>
          <p className="text-sm text-gray-600">Tamamlanan egzersiz</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Seri</h3>
            <TrendingUp className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold text-green-600">7</p>
          <p className="text-sm text-gray-600">Gün üst üste</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Ruh Hali</h3>
            <Smile className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-3xl font-bold text-yellow-600">%75</p>
          <p className="text-sm text-gray-600">Pozitif günler</p>
        </div>
      </div>

      {/* Inspirational Quote */}
      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6">
        <div className="text-center">
          <Leaf className="w-8 h-8 text-green-600 mx-auto mb-4" />
          <blockquote className="text-lg font-medium text-gray-900 mb-2">
            "Her gün yeni bir başlangıç, her egzersiz zihinsel güçlenme için bir adımdır."
          </blockquote>
          <p className="text-sm text-gray-600">Günün ilhamı</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;