import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Onboarding: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="step1" replace />} />
      <Route path="step1" element={<Step1 />} />
      <Route path="step2" element={<Step2 />} />
      <Route path="step3" element={<Step3 />} />
    </Routes>
  );
};

export default Onboarding;
