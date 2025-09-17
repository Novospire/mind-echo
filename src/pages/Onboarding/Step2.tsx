import React from "react";
import { useNavigate } from "react-router-dom";

const Step2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 via-white to-blue-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        {/* Progress indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Gizlilik tercihiniz?
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Verilerinizin nasıl saklanacağını seçin
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => navigate("/onboarding/step3")}
            className="border rounded-xl p-6 flex flex-col items-center hover:border-green-500 hover:shadow-md transition"
          >
            <span className="text-green-500 text-3xl mb-2">🛡️</span>
            <span className="font-medium text-gray-800">Anonim Kullanım</span>
            <span className="text-sm text-gray-500 mt-1 text-center">
              Sadece bir rumuz kullanarak, kişisel bilgilerim saklanmasın
            </span>
          </button>

          <button
            onClick={() => navigate("/onboarding/step3")}
            className="border rounded-xl p-6 flex flex-col items-center hover:border-blue-500 hover:shadow-md transition"
          >
            <span className="text-blue-500 text-3xl mb-2">💙</span>
            <span className="font-medium text-gray-800">Kişisel Profil</span>
            <span className="text-sm text-gray-500 mt-1 text-center">
              İlerlememin kaydedilmesi ve kişiselleştirilmiş deneyim
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
