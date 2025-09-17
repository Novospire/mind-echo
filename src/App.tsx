import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { ConsentProvider } from './contexts/ConsentContext';
import Layout from './components/Layout/Layout';
import ConsentBanner from './components/Legal/ConsentBanner';

// Sayfalar
import Landing from './pages/Landing';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Exercises from './pages/Exercises';
import Tests from './pages/Tests';
import Education from './pages/Education';
import Progress from './pages/Progress';
import Reminders from './pages/Reminders';
import Settings from './pages/Settings';

// Onboarding
import Onboarding from './pages/Onboarding';
import Step1 from './pages/Onboarding/Step1';
import Step2 from './pages/Onboarding/Step2';
import Step3 from './pages/Onboarding/Step3';

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

              {/* Onboarding Flow */}
              <Route path="/onboarding" element={<Onboarding />}>
                <Route index element={<Navigate to="/onboarding/step1" replace />} />
                <Route path="step1" element={<Step1 />} />
                <Route path="step2" element={<Step2 />} />
                <Route path="step3" element={<Step3 />} />
              </Route>

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
