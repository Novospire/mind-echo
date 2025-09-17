import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { ConsentProvider } from './contexts/ConsentContext';
import Layout from './components/Layout/Layout';
import ConsentBanner from './components/Legal/ConsentBanner';

// Sayfalar
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Exercises from './pages/Exercises';
import Tests from './pages/Tests';
import Education from './pages/Education';
import Progress from './pages/Progress';
import Reminders from './pages/Reminders';
import Settings from './pages/Settings';

// Yeni Onboarding ekranları
import Onboarding from './pages/Onboarding/Onboarding';

import './App.css';

function App() {
  return (
    <ConsentProvider>
      <AppProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
            <ConsentBanner />
            <Routes>
              {/* Açılış ekranı (Calm tarzı) */}
              <Route path="/" element={<Landing />} />

              {/* Onboarding wizard */}
              <Route path="/onboarding/*" element={<Onboarding />} />

              {/* Uygulama */}
              <Route path="/app" element={<Layout />}>
                <Route index element={<Navigate to="/app/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="exercises" element={<Exercises />} />
                <Route path="tests" element={<Tests />} />
                <Route path="education" element={<Education />} />
                <Route path="progress" element={<Progress />} />
                <Route path="reminders" element={<Reminders />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </AppProvider>
    </ConsentProvider>
  );
}

export default App;
