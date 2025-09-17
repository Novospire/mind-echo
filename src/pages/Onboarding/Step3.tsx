import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step3: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleStart = () => {
    // Burada bilgileri kaydedebilir veya API'ye gönderebilirsin
    navigate("/app/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 via-white to-blue-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        {/* Progress indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Son adım
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Bilgilerinizi girin
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Adınızı girin"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            type="email"
            placeholder="E-posta (isteğe bağlı)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Uyarı kutusu */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4 text-sm text-yellow-700">
          ⚠️ Hatırlatma: Bu uygulama tıbbi teşhis koymaz ve profesyonel sağlık
          hizmeti yerine geçmez.
        </div>

        <button
          onClick={handleStart}
          className="w-full mt-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-lg shadow-md hover:opacity-90 transition"
        >
          Yolculuğa Başla →
        </button>
      </div>
    </div>
  );
};

export default Step3;
