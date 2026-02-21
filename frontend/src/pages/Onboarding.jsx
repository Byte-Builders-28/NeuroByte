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
      glow: "bg-indigo-500/30"
    },
    {
      icon: Sparkles,
      title: "Emotion Detection",
      desc: "AI analyzes facial expressions to understand frustration or focus.",
      color: "text-fuchsia-400",
      bg: "bg-fuchsia-500/10",
      border: "border-fuchsia-500/20",
      glow: "bg-fuchsia-500/30"
    },
    {
      icon: Gamepad2,
      title: "Gamified Learning",
      desc: "Interactive games make learning engaging and rewarding.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      glow: "bg-cyan-500/30"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      desc: "Parents and teachers get clear insights into improvements.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      glow: "bg-amber-500/30"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#02000a] text-slate-50 flex flex-col items-center px-6 overflow-hidden selection:bg-indigo-500/40">
      
      {/* Dynamic Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-fuchsia-600/15 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow delay-500" />
        <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow delay-300" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full max-w-7xl mx-auto py-24 pb-32">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24 mt-10">
          
          <div className="animate-slide-up inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-indigo-300 font-medium mb-10 backdrop-blur-md shadow-2xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            <span className="text-sm tracking-wide">Welcome to the future of learning</span>
          </div>
          
          <h1 className="animate-slide-up delay-100 text-7xl md:text-9xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-slate-400 drop-shadow-2xl pb-2">
            NeuroByte
          </h1>

          <p className="animate-slide-up delay-200 text-xl md:text-2xl text-slate-400 max-w-3xl mb-14 leading-relaxed font-light">
            AI-powered personalized learning platform helping neurodivergent
            learners stay focused, motivated, and confident.
          </p>

          <button className="animate-slide-up delay-300 group relative inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)] overflow-hidden">
            <span className="relative z-10">Get Started Now</span>
            <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
            
            {/* Button Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-white to-fuchsia-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`animate-slide-up delay-400 group relative bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl p-8 rounded-[2rem] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden`}
              style={{ animationDelay: `${400 + (idx * 100)}ms` }}
            >
              {/* Card Hover Ambient Glow */}
              <div className={`absolute -top-20 -right-20 w-48 h-48 blur-[60px] rounded-full transition-opacity opacity-0 group-hover:opacity-100 duration-700 ${feature.glow}`} />
              
              {/* Icon Container */}
              <div className={`relative z-10 inline-flex p-4 rounded-2xl mb-8 border ${feature.bg} ${feature.border} shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} strokeWidth={1.5} />
              </div>
              
              <h3 className="relative z-10 text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                {feature.title}
              </h3>
              <p className="relative z-10 text-slate-400 leading-relaxed text-base font-light">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}