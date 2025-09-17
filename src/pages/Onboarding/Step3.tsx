import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";

export default function Step3() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useApp();

  const handleFinish = () => {
    if (name.trim()) {
      localStorage.setItem("userName", name.trim());
      dispatch({
        type: "SET_USER",
        payload: {
          id: "local",
          name: name.trim(),
          type: "guest",
          isAnonymous: false,
          createdAt: new Date(),
        },
      });
    }
    navigate("/app/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-green-50 px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Son adım</h2>
        <p className="text-center text-gray-600 mb-4">Adınızı girin</p>

        <input
          type="text"
          placeholder="Ad Soyad"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-green-400"
        />

        <div className="p-3 mb-6 text-sm text-yellow-700 bg-yellow-100 rounded-lg">
          ⚠️ Bu uygulama tıbbi teşhis koymaz ve profesyonel sağlık hizmeti yerine geçmez.
        </div>

        <button
          onClick={handleFinish}
          className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition"
        >
          Yolculuğa Başla →
        </button>
      </div>
    </div>
  );
}
