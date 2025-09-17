import React from "react";
import { useNavigate } from "react-router-dom";

export default function Step3() {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate("/app/dashboard");
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-b from-green-50 to-blue-50 px-4">
      <h2 className="text-2xl font-bold mb-6">Son adım</h2>
      <p className="mb-4 text-gray-700 text-center">
        Hazırsanız yolculuğa başlayabilirsiniz 🚀
      </p>
      <button
        onClick={handleFinish}
        className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-md hover:opacity-90 transition"
      >
        Yolculuğa Başla
      </button>
    </div>
  );
}
