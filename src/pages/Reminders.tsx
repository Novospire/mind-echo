import React, { useState } from 'react';
import { Bell, Plus, Check, Clock, Heart, Pill, Brain, Users, Calendar, Trash2 } from 'lucide-react';

interface Reminder {
  id: string;
  title: string;
  time: string;
  frequency: string;
  category: 'medicine' | 'exercise' | 'appointment' | 'general';
  isActive: boolean;
  completed?: boolean;
}

const Reminders: React.FC = () => {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: '1',
      title: 'Sabah ilacım',
      time: '08:00',
      frequency: 'Günlük',
      category: 'medicine',
      isActive: true,
      completed: false,
    },
    {
      id: '2',
      title: 'Beyin egzersizi yap',
      time: '14:00',
      frequency: 'Günlük',
      category: 'exercise',
      isActive: true,
      completed: true,
    },
    {
      id: '3',
      title: 'Dr. Ahmet ile randevu',
      time: '10:30',
      frequency: 'Bir kez',
      category: 'appointment',
      isActive: true,
      completed: false,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newReminder, setNewReminder] = useState({
    title: '',
    time: '',
    frequency: 'Günlük',
    category: 'general' as const,
  });

  const categoryIcons = {
    medicine: Pill,
    exercise: Brain,
    appointment: Calendar,
    general: Bell,
  };

  const categoryColors = {
    medicine: 'bg-red-100 text-red-700 border-red-200',
    exercise: 'bg-blue-100 text-blue-700 border-blue-200',
    appointment: 'bg-green-100 text-green-700 border-green-200',
    general: 'bg-gray-100 text-gray-700 border-gray-200',
  };

  const handleAddReminder = () => {
    if (newReminder.title && newReminder.time) {
      const reminder: Reminder = {
        id: Date.now().toString(),
        ...newReminder,
        isActive: true,
        completed: false,
      };
      
      setReminders([...reminders, reminder]);
      setNewReminder({
        title: '',
        time: '',
        frequency: 'Günlük',
        category: 'general',
      });
      setShowAddForm(false);
    }
  };

  const toggleReminder = (id: string) => {
    setReminders(reminders.map(reminder =>
      reminder.id === id
        ? { ...reminder, isActive: !reminder.isActive }
        : reminder
    ));
  };

  const completeReminder = (id: string) => {
    setReminders(reminders.map(reminder =>
      reminder.id === id
        ? { ...reminder, completed: !reminder.completed }
        : reminder
    ));
  };

  const deleteReminder = (id: string) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };

  const todaysReminders = reminders.filter(r => r.isActive);
  const completedToday = todaysReminders.filter(r => r.completed).length;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Hatırlatıcılar ve Destek
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Günlük rutininizi korumak ve önemli görevleri unutmamak için 
          kişiselleştirilmiş hatırlatıcılar.
        </p>
      </div>

      {/* Daily Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Bugün</h2>
              <p className="text-gray-600">
                {new Date().toLocaleDateString('tr-TR', { 
                  weekday: 'long', 
                  day: 'numeric', 
                  month: 'long' 
                })}
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">
              {completedToday}/{todaysReminders.length}
            </div>
            <div className="text-sm text-gray-600">Tamamlanan</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Günlük İlerleme</span>
            <span className="text-sm text-green-600 font-medium">
              %{Math.round((completedToday / todaysReminders.length) * 100) || 0}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-300"
              style={{ 
                width: `${(completedToday / todaysReminders.length) * 100 || 0}%` 
              }}
            />
          </div>
        </div>
      </div>

      {/* Active Reminders */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <Bell className="w-6 h-6 mr-3 text-blue-600" />
            Aktif Hatırlatıcılar
          </h2>
          
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-green-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Yeni Ekle</span>
          </button>
        </div>

        <div className="space-y-4">
          {reminders.map((reminder) => {
            const Icon = categoryIcons[reminder.category];
            const colorClass = categoryColors[reminder.category];
            
            return (
              <div
                key={reminder.id}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  reminder.completed 
                    ? 'bg-green-50 border-green-200' 
                    : reminder.isActive 
                      ? 'bg-white border-gray-200' 
                      : 'bg-gray-50 border-gray-200 opacity-60'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full border ${colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`font-semibold ${
                      reminder.completed ? 'text-green-700 line-through' : 'text-gray-900'
                    }`}>
                      {reminder.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {reminder.time}
                      </span>
                      <span>{reminder.frequency}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {reminder.category !== 'appointment' && (
                      <button
                        onClick={() => completeReminder(reminder.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          reminder.completed
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-700'
                        }`}
                      >
                        <Check className="w-5 h-5" />
                      </button>
                    )}
                    
                    <button
                      onClick={() => toggleReminder(reminder.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        reminder.isActive
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <Bell className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={() => deleteReminder(reminder.id)}
                      className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {reminders.length === 0 && (
          <div className="text-center py-12">
            <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Henüz hatırlatıcınız yok
            </h3>
            <p className="text-gray-600 mb-6">
              İlk hatırlatıcınızı oluşturarak başlayın
            </p>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700"
            >
              İlk Hatırlatıcıyı Ekle
            </button>
          </div>
        )}
      </div>

      {/* Support Resources */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <Users className="w-6 h-6 mr-3 text-purple-600" />
          Aile Destek Rehberi
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6">
            <Heart className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">
              Nasıl Destek Olabilirim?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Sevdiklerinize destek olmanın yollarını öğrenin. Sabırlı olmak, 
              empati kurmak ve pratik yardımlar sunmak.
            </p>
            <button className="text-purple-600 font-medium text-sm hover:text-purple-700">
              Rehberi Oku →
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <Users className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">
              İletişim İpuçları
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Unutkanlık yaşayan kişilerle etkili iletişim kurmanın 
              yolları ve teknikleri.
            </p>
            <button className="text-purple-600 font-medium text-sm hover:text-purple-700">
              İpuçlarını Gör →
            </button>
          </div>
        </div>
      </div>

      {/* Add Reminder Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Yeni Hatırlatıcı Ekle
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hatırlatıcı Başlığı
                </label>
                <input
                  type="text"
                  value={newReminder.title}
                  onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Örn: İlaç alma zamanı"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zaman
                </label>
                <input
                  type="time"
                  value={newReminder.time}
                  onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sıklık
                </label>
                <select
                  value={newReminder.frequency}
                  onChange={(e) => setNewReminder({ ...newReminder, frequency: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option>Günlük</option>
                  <option>Haftalık</option>
                  <option>Bir kez</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori
                </label>
                <select
                  value={newReminder.category}
                  onChange={(e) => setNewReminder({ ...newReminder, category: e.target.value as any })}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="general">Genel</option>
                  <option value="medicine">İlaç</option>
                  <option value="exercise">Egzersiz</option>
                  <option value="appointment">Randevu</option>
                </select>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-8">
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-xl font-medium hover:bg-gray-300"
              >
                İptal
              </button>
              <button
                onClick={handleAddReminder}
                className="flex-1 py-3 px-4 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700"
              >
                Ekle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reminders;