import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Step1 from "./Onboarding/Step1";
import Step2 from "./Onboarding/Step2";
import Step3 from "./Onboarding/Step3";

export default function Onboarding() {
  return (
    <Routes>
      {/* Varsayılan olarak Step1’e yönlendir */}
      <Route path="/" element={<Navigate to="step1" replace />} />
      <Route path="step1" element={<Step1 />} />
      <Route path="step2" element={<Step2 />} />
      <Route path="step3" element={<Step3 />} />
    </Routes>
  );
}
