import { Brain, Sparkles, Gamepad2, BarChart3 } from "lucide-react";

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col items-center justify-center px-6">

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4 text-center">
        NeuroByte
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-300 text-center max-w-xl mb-8">
        AI-powered personalized learning platform helping neurodivergent
        learners stay focused, motivated and confident.
      </p>

      {/* Get Started Button */}
      <button className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-xl font-semibold shadow-lg transition">
        Get Started
      </button>

      {/* Feature Boxes */}
      <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-6xl">

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:scale-105 hover:-translate-y-2 transition shadow-xl">
          <Brain className="mb-3 text-indigo-400" size={32} />
          <h3 className="font-semibold text-lg">Adaptive AI</h3>
          <p className="text-gray-300 text-sm mt-2">
            The system adapts difficulty based on user focus and learning speed.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:scale-105 hover:-translate-y-2 transition shadow-xl">
          <Sparkles className="mb-3 text-pink-400" size={32} />
          <h3 className="font-semibold text-lg">Emotion Detection</h3>
          <p className="text-gray-300 text-sm mt-2">
            AI analyzes facial expressions to understand frustration or focus.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:scale-105 hover:-translate-y-2 transition shadow-xl">
          <Gamepad2 className="mb-3 text-green-400" size={32} />
          <h3 className="font-semibold text-lg">Gamified Learning</h3>
          <p className="text-gray-300 text-sm mt-2">
            Interactive games make learning engaging and rewarding.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:scale-105 hover:-translate-y-2 transition shadow-xl">
          <BarChart3 className="mb-3 text-yellow-400" size={32} />
          <h3 className="font-semibold text-lg">Progress Tracking</h3>
          <p className="text-gray-300 text-sm mt-2">
            Parents and teachers get clear insights into improvements.
          </p>
        </div>

      </div>
    </div>
  );
}