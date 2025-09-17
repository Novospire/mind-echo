import { User, Users } from "lucide-react";

export default function Step1({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-b from-green-50 to-blue-50">
      <h2 className="text-2xl font-bold mb-6">Kim olduğunuzu belirtin</h2>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={onNext}
          className="p-6 border rounded-xl flex flex-col items-center hover:bg-green-50"
        >
          <User className="w-8 h-8 text-green-600 mb-2" />
          Ben kendim için
        </button>
        <button
          onClick={onNext}
          className="p-6 border rounded-xl flex flex-col items-center hover:bg-blue-50"
        >
          <Users className="w-8 h-8 text-blue-600 mb-2" />
          Yakınım için
        </button>
      </div>
    </div>
  );
}
