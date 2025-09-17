import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Kullanıcı giriş yaptı varsay → Dashboard’a yönlendir
    navigate("/app/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-800 to-blue-900 px-4">
      {/* Logo */}
      <div className="mb-8 flex justify-center">
        <img
          src="/mindechologo.png"
          alt="MindEcho Logo"
          className="w-24 h-24"
        />
      </div>

      {/* Başlık */}
      <h1 className="text-3xl font-bold text-white mb-2">MindEcho</h1>
      <p className="text-gray-300 mb-8 text-center">
        Zihinsel refah yolculuğunuza hoş geldiniz.
      </p>

      {/* Email ile devam */}
      <button
        onClick={handleContinue}
        className="w-full max-w-xs bg-white text-black font-medium py-3 rounded-lg hover:bg-gray-100 transition mb-3"
      >
        Email ile devam et
      </button>

      {/* Apple ile devam */}
      <button
        onClick={handleContinue}
        className="w-full max-w-xs bg-black text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition flex items-center justify-center space-x-2 mb-3"
      >
        <span className="text-xl"></span>
        <span>Apple ile devam et</span>
      </button>

      {/* Google ile devam */}
      <button
        onClick={handleContinue}
        className="w-full max-w-xs bg-white text-black font-medium py-3 rounded-lg hover:bg-gray-100 transition flex items-center justify-center space-x-2 mb-4"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span>Google ile devam et</span>
      </button>

      {/* Checkbox */}
      <div className="mt-2 flex items-center space-x-2 justify-center">
        <input type="checkbox" id="offers" className="w-4 h-4 text-green-500" />
        <label htmlFor="offers" className="text-sm text-gray-300">
          Kampanyalardan haberdar olmak istiyorum
        </label>
      </div>

      {/* Alt Yazı */}
      <p className="mt-6 text-sm text-gray-300">
        Zaten hesabınız var mı?{" "}
        <Link
          to="/app/dashboard"
          className="text-green-400 font-medium hover:underline"
        >
          Giriş yap
        </Link>
      </p>
    </div>
  );
};

export default Landing;
