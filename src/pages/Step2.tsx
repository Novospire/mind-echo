import { Shield, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Step2() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-b from-green-50 to-blue-50">
      <h2 className="text-2xl font-bold mb-6">Gizlilik tercihiniz?</h2>
      <p className="mb-6 text-gray-600">Verilerinizin nasıl saklanacağını seçin:</p>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => navigate("/onboarding/step3")}
          className="p-6 border rounded-xl flex flex-col items-center hover:bg-green-50"
        >
          <Shield className="w-8 h-8 text-green-600 mb-2" />
          Anonim Kullanım
          <span className="text-sm text-gray-500 mt-1 text-center">
            Sadece bir rumuz ile, kişisel bilgilerim saklanmasın
          </span>
        </button>
        <button
          onClick={() => navigate("/onboarding/step3")}
          className="p-6 border rounded-xl flex flex-col items-center hover:bg-blue-50"
        >
          <Heart className="w-8 h-8 text-blue-600 mb-2" />
          Kişisel Profil
          <span className="text-sm text-gray-500 mt-1 text-center">
            İlerlemenin kaydedilmesi ve kişiselleştirilmiş deneyim
          </span>
        </button>
      </div>
    </div>
  );
}
