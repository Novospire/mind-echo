import { Routes, Route, useNavigate } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Step1 onNext={() => navigate("step2")} />} />
      <Route path="step2" element={<Step2 onNext={() => navigate("step3")} />} />
      <Route path="step3" element={<Step3 onFinish={() => navigate("/app/dashboard")} />} />
    </Routes>
  );
}
