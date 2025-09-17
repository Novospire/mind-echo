import { useNavigate } from "react-router-dom";

export default function Step3() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/app/dashboard");
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-b from-green-50 to-blue-50">
      <h2 className="text-2xl font-bold mb-6">Son adım</h2>
      <p className="mb-6 text-gray-600">Bilgilerinizi girin</p>
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-xl shadow">
        <input
          type="text"
          placeholder="Adınızı girin"
          className="w-full p-3 border rounded mb-4"
          required
        />
        <input
          type="email"
          placeholder="E-posta (isteğe bağlı)"
          className="w-full p-3 border rounded mb-4"
        />
        <div className="text-yellow-600 text-sm mb-4">
          ⚠ Hatırlatma: Bu uygulama tıbbi teşhis koymaz ve profesyonel sağlık hizmeti yerine geçmez.
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-lg font-semibold hover:opacity-90"
        >
          Yolculuğa Başla →
        </button>
      </form>
    </div>
  );
}
