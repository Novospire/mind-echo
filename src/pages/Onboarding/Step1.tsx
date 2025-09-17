import React from "react";
import { useNavigate } from "react-router-dom";

const Step1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 via-white to-blue-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        {/* Progress indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Kim olduğunuzu belirtin
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Size daha iyi hizmet verebilmemiz için hangi kategoride olduğunuzu seçin
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => navigate("/onboarding/step2")}
            className="border rounded-xl p-6 flex flex-col items-center hover:border-green-500 hover:shadow-md transition"
          >
            <span className="text-green-500 text-3xl mb-2">👤</span>
            <span className="font-medium text-gray-800">Ben kendim için</span>
            <span className="text-sm text-gray-500 mt-1 text-center">
              Kendi zihinsel refahımı takip etmek istiyorum
            </span>
          </button>

          <button
            onClick={() => navigate("/onboarding/step2")}
            className="border rounded-xl p-6 flex flex-col items-center hover:border-blue-500 hover:shadow-md transition"
          >
            <span className="text-blue-500 text-3xl mb-2">👥</span>
            <span className="font-medium text-gray-800">Yakınım için</span>
            <span className="text-sm text-gray-500 mt-1 text-center">
              Sevdiklerimin zihinsel refahını takip etmek istiyorum
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
