import React, { useState } from 'react';
import { Brain, Target, Compass, Star, Play, Clock, Award } from 'lucide-react';

const Exercises: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'all', label: 'Tümü', icon: Star },
    { id: 'memory', label: 'Hafıza', icon: Brain },
    { id: 'attention', label: 'Dikkat', icon: Target },
    { id: 'orientation', label: 'Yönelim', icon: Compass },
  ];

  const exercises = [
    {
      id: 'memory-cards',
      title: 'Hafıza Kartları',
      description: 'Kartları çevirerek eşleşenleri bulun',
      category: 'memory',
      difficulty: 'Kolay',
      duration: '5-10 dk',
      color: 'from-blue-400 to-blue-600',
      benefits: ['Kısa süreli hafıza', 'Görsel hafıza', 'Dikkat'],
    },
    {
      id: 'word-recall',
      title: 'Kelime Hatırlama',
      description: 'Gösterilen kelimeleri sırayla hatırlamaya çalışın',
      category: 'memory',
      difficulty: 'Orta',
      duration: '3-7 dk',
      color: 'from-purple-400 to-purple-600',
      benefits: ['Sözel hafıza', 'Sıralı hatırlama'],
    },
    {
      id: 'color-sorting',
      title: 'Renk Ayırma',
      description: 'Farklı renkleri hızlıca ayırın ve odaklanın',
      category: 'attention',
      difficulty: 'Kolay',
      duration: '3-5 dk',
      color: 'from-green-400 to-green-600',
      benefits: ['Seçici dikkat', 'Reaksiyon hızı'],
    },
    {
      id: 'shape-focus',
      title: 'Şekil Odaklama',
      description: 'Karışık şekiller arasında hedefi bulun',
      category: 'attention',
      difficulty: 'Orta',
      duration: '4-8 dk',
      color: 'from-yellow-400 to-yellow-600',
      benefits: ['Görsel dikkat', 'Konsantrasyon'],
    },
    {
      id: 'direction-finding',
      title: 'Yön Bulma',
      description: 'Basit haritada rotayı takip edin',
      category: 'orientation',
      difficulty: 'Kolay',
      duration: '5-10 dk',
      color: 'from-teal-400 to-teal-600',
      benefits: ['Mekansal yönelim', 'Yön algısı'],
    },
    {
      id: 'time-sequence',
      title: 'Zaman Sıralaması',
      description: 'Olayları doğru zaman sırasına koyun',
      category: 'orientation',
      difficulty: 'Orta',
      duration: '6-10 dk',
      color: 'from-indigo-400 to-indigo-600',
      benefits: ['Zamansal yönelim', 'Mantıksal düşünme'],
    },
  ];

  const filteredExercises = selectedCategory === 'all' 
    ? exercises 
    : exercises.filter(ex => ex.category === selectedCategory);

  const handleExerciseStart = (exerciseId: string) => {
    // Simulated exercise completion
    setTimeout(() => {
      setCompletedExercises(prev => new Set([...prev, exerciseId]));
    }, 2000);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Kolay': return 'bg-green-100 text-green-800';
      case 'Orta': return 'bg-yellow-100 text-yellow-800';
      case 'Zor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Beyin Egzersizleri
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Zihinsel yeteneklerinizi güçlendirmek için özel olarak tasarlanmış egzersizler. 
          Kendi hızınızda ilerleyin ve gelişiminizi takip edin.
        </p>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Kategori Seçin</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-600'
              }`}
            >
              <category.icon className="w-8 h-8 mx-auto mb-2" />
              <p className="font-medium">{category.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Exercises Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map((exercise) => (
          <div
            key={exercise.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <div
              className={`h-32 bg-gradient-to-r ${exercise.color} relative overflow-hidden`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="w-16 h-16 text-white opacity-30" />
              </div>
              {completedExercises.has(exercise.id) && (
                <div className="absolute top-3 right-3 bg-white rounded-full p-2">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">{exercise.title}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}
                >
                  {exercise.difficulty}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {exercise.description}
              </p>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                <span>{exercise.duration}</span>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Faydaları:</h4>
                <div className="flex flex-wrap gap-2">
                  {exercise.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => handleExerciseStart(exercise.id)}
                disabled={completedExercises.has(exercise.id)}
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  completedExercises.has(exercise.id)
                    ? 'bg-green-100 text-green-700 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                }`}
              >
                {completedExercises.has(exercise.id) ? (
                  <>
                    <Award className="w-5 h-5" />
                    <span>Tamamlandı</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span>Başla</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Summary */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Bugünkü İlerlemeniz
          </h3>
          <p className="text-3xl font-bold text-green-600 mb-2">
            {completedExercises.size} / {exercises.length}
          </p>
          <p className="text-gray-600">Egzersiz tamamlandı</p>
          
          {completedExercises.size > 0 && (
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-sm text-green-700">
                🎉 Harika! Bugün {completedExercises.size} egzersiz tamamladınız. 
                Düzenli egzersiz zihinsel sağlığınız için çok önemli.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exercises;