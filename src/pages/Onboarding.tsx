import React, { useState } from "react";
import Step1 from "./Onboarding/Step1";
import Step2 from "./Onboarding/Step2";
import Step3 from "./Onboarding/Step3";

export default function Onboarding() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-blue-50 px-4">
      {step === 1 && <Step1 onNext={nextStep} />}
      {step === 2 && <Step2 onNext={nextStep} />}
      {step === 3 && <Step3 />}
    </div>
  );
}
