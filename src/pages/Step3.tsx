export default function Step3({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-b from-green-50 to-blue-50">
      <h2 className="text-2xl font-bold mb-6">Son adım</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFinish();
        }}
        className="w-full max-w-sm space-y-4"
      >
        <input
          type="text"
          placeholder="Adınız"
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          placeholder="E-posta (isteğe bağlı)"
          className="w-full p-3 border rounded-lg"
        />
        <p className="text-xs text-yellow-600">
          ⚠ Hatırlatma: Bu uygulama tıbbi teşhis koymaz ve profesyonel sağlık hizmeti yerine geçmez.
        </p>
        <button
          type="submit"
          className="w-full p-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold"
        >
          Yolculuğa Başla →
        </button>
      </form>
    </div>
  );
}
