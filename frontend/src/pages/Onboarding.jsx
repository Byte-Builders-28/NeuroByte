import { Brain, Sparkles, Gamepad2, BarChart3, ChevronRight } from "lucide-react";

export default function Onboarding() {
  const features = [
    {
      icon: Brain,
      title: "Adaptive AI",
      desc: "The system adapts difficulty based on user focus and learning speed.",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      glow: "bg-indigo-500/20"
    },
    {
      icon: Sparkles,
      title: "Emotion Detection",
      desc: "AI analyzes facial expressions to understand frustration or focus.",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      glow: "bg-pink-500/20"
    },
    {
      icon: Gamepad2,
      title: "Gamified Learning",
      desc: "Interactive games make learning engaging and rewarding.",
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      glow: "bg-green-500/20"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      desc: "Parents and teachers get clear insights into improvements.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
      glow: "bg-yellow-500/20"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-50 flex flex-col items-center px-6 overflow-hidden selection:bg-indigo-500/30">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full max-w-7xl mx-auto py-20 pb-28">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-md shadow-2xl">
            <Sparkles size={16} />
            <span>Welcome to the future of learning</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent drop-shadow-sm pb-2">
            NeuroByte
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
            AI-powered personalized learning platform helping neurodivergent
            learners stay focused, motivated and confident.
          </p>

          <button className="group relative inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] hover:-translate-y-1">
            <span>Get Started</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-full border border-white/30 group-hover:border-white/50 transition-colors" />
            
            {/* Button Inner Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400/0 via-white/20 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 rounded-3xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              {/* Card Hover Ambient Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full transition-opacity opacity-0 group-hover:opacity-100 ${feature.glow}`} />
              
              <div className={`inline-flex p-4 rounded-2xl mb-6 border ${feature.bg} ${feature.border} shadow-inner`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}