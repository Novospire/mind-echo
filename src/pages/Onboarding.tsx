import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1 from "./Onboarding/Step1";
import Step2 from "./Onboarding/Step2";
import Step3 from "./Onboarding/Step3";


const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Son adım → Dashboard’a yönlendir
      navigate("/app/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-blue-50 px-4">
      <div className="w-full max-w-md">
        {step === 1 && <Step1 onNext={handleNext} />}
        {step === 2 && <Step2 onNext={handleNext} />}
        {step === 3 && <Step3 onNext={handleNext} />}
      </div>
    </div>
  );
};

export default Onboarding;
