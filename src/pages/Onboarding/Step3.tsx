import { useNavigate } from "react-router-dom";

export default function Step3() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-b from-green-50 to-blue-50 px-4">
      <h2 className="text-2xl font-bold mb-6">Son adım</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/app/dashboard"); // onboarding biter → Dashboard
        }}
        className="w-full max-w-md space-y-4"
      >
        <input
          type="text"
          placeholder="Adınız"
          className="w-full border rounded-lg px-4 py-2"
        />
        <input
          type="email"
          placeholder="E-posta (isteğe bağlı)"
          className="w-full border rounded-lg px-4 py-2"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Yolculuğa Başla
        </button>
      </form>
    </div>
  );
}
