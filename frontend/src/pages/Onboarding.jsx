import { useState, useEffect } from "react";
import { Brain, Sparkles, Gamepad2, BarChart3, ChevronRight, ChevronLeft, X, Check, Globe, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Ballpit from "../components/Ballpit";

export default function Onboarding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedLang, setSelectedLang] = useState("");
  const navigate = useNavigate();

  // Hide global scrollbar on this page
  useEffect(() => {
    document.documentElement.classList.add('hide-scrollbar');
    document.body.classList.add('hide-scrollbar');
    return () => {
      document.documentElement.classList.remove('hide-scrollbar');
      document.body.classList.remove('hide-scrollbar');
    };
  }, []);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  const conditions = [
    { id: "adhd", label: "ADHD", desc: "Attention Deficit Hyperactivity Disorder" },
    { id: "asd", label: "ASD", desc: "Autism Spectrum Disorder" },
    { id: "ptsd", label: "PTSD", desc: "Post-Traumatic Stress Disorder" },
    { id: "dyslexia", label: "Dyslexia", desc: "Difficulty reading or decoding" },
    { id: "other", label: "Other / Prefer not to say", desc: "General focus enhancement" },
  ];

  const ages = [
    { id: "under-7", label: "Under 7", desc: "Early learners" },
    { id: "7-12", label: "7-12 years", desc: "Primary students" },
    { id: "13-17", label: "13-17 years", desc: "Teens" },
    { id: "18-plus", label: "18+ years", desc: "Adults" },
  ];

  const languages = [
    { id: "en", label: "English" },
    { id: "hi", label: "Hindi" },
    { id: "bn", label: "Bengali" },
    { id: "mr", label: "Marathi" },
    { id: "ta", label: "Tamil" },
    { id: "te", label: "Telugu" },
    { id: "gu", label: "Gujarati" },
    { id: "ml", label: "Malayalam" },
    { id: "ur", label: "Urdu" },
    { id: "es", label: "Spanish" },
    { id: "fr", label: "French" },
  ];

  const features = [
    {
      icon: Brain,
      title: "Adaptive AI",
      desc: "The system adapts difficulty based on user focus and learning speed.",
      color: "text-sky-600",
      bg: "bg-sky-100",
      border: "border-sky-200",
      glow: "bg-sky-400/20"
    },
    {
      icon: Sparkles,
      title: "Emotion Detection",
      desc: "AI analyzes facial expressions to understand frustration or focus.",
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      border: "border-emerald-200",
      glow: "bg-emerald-400/20"
    },
    {
      icon: Gamepad2,
      title: "Gamified Learning",
      desc: "Interactive games make learning engaging and rewarding.",
      color: "text-amber-500",
      bg: "bg-amber-100",
      border: "border-amber-200",
      glow: "bg-amber-400/20"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      desc: "Parents and teachers get clear insights into improvements.",
      color: "text-indigo-500",
      bg: "bg-indigo-100",
      border: "border-indigo-200",
      glow: "bg-indigo-400/20"
    }
  ];

  const handleNextStep = () => {
    if (step === 1 && selectedCondition) setStep(2);
  };

  const handleFinish = () => {
    if (selectedCondition && selectedAge && selectedLang) {
      navigate("/assessment", {
        state: { condition: selectedCondition, age: selectedAge, language: selectedLang }
        state: {
          condition: selectedCondition,
          age: selectedAge,
          language: selectedLang
        }
      });
    }
  };

  const openModal = () => {
    setStep(1);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Main page content */}
      <div className="glass">
        <div className={`relative z-10 flex flex-col items-center justify-center flex-1 w-full max-w-7xl mx-auto py-20 pb-32 transition-all duration-700 ${isModalOpen ? 'blur-md opacity-40 scale-95 pointer-events-none' : 'blur-0 opacity-100 scale-100'}`}>

      {/* Main Content Container */}
      <div className={`relative z-10 flex flex-col items-center justify-center flex-1 w-full max-w-7xl mx-auto py-20 pb-32 transition-all duration-700 ${isModalOpen ? 'blur-md opacity-40 scale-95 pointer-events-none' : 'blur-0 opacity-100 scale-100'}`}>

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 mt-6" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Ballpit Background */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Ballpit
              count={500}
              gravity={0.01}
              friction={0.9975}
              wallBounce={0.95}
              followCursor={false}
              colors={[
                0xFF0000, // red
                0xFF7F00, // orange
                0xFFFF00, // yellow
                0x00FF00, // green
                0x0000FF, // blue
                0x4B0082, // indigo
                0x9400D3  // violet
              ]}
            />
          </div>

          <div className="animate-slide-up inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 border border-teal-100 text-teal-700 font-semibold mb-10 backdrop-blur-md shadow-sm" style={{ position: 'relative', zIndex: 1 }}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </span>
            <span className="text-sm tracking-wide">A safe space to learn & play</span>
          </div>

          <h1 className="animate-slide-up delay-100 text-7xl md:text-9xl font-black mb-8 tracking-tighter text-slate-800 drop-shadow-sm pb-2" style={{ position: 'relative', zIndex: 1 }}>
            NeuroByte
          </h1>

          <p className="animate-slide-up delay-200 text-xl md:text-2xl text-slate-600 max-w-3xl mb-14 leading-relaxed font-medium" style={{ position: 'relative', zIndex: 1 }}>
            A playful, therapeutic learning platform designed to help neurodivergent
            minds stay grounded, focused, and confident through interactive games.
          </p>

          <button
            onClick={openModal}
            className="animate-slide-up delay-300 group relative inline-flex items-center justify-center gap-3 bg-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 hover:bg-teal-500 hover:shadow-[0_10px_40px_-10px_rgba(13,148,136,0.6)] overflow-hidden shadow-md"
            style={{ position: 'relative', zIndex: 1 }}
          >
            <span className="relative z-10">Start the Journey</span>
            <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`animate-slide-up delay-400 group relative bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:bg-white hover:border-teal-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.15)] overflow-hidden shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]`}
              style={{ animationDelay: `${400 + (idx * 100)}ms` }}
            >
              {/* Card Hover Ambient Glow */}
              <div className={`absolute -top-20 -right-20 w-48 h-48 blur-[50px] rounded-full transition-opacity opacity-0 group-hover:opacity-100 duration-700 ${feature.glow}`} />

              {/* Icon Container */}
              <div className={`relative z-10 inline-flex p-4 rounded-full mb-8 border ${feature.bg} ${feature.border} shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} strokeWidth={2.5} />
              </div>

              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-slate-800 mb-4 tracking-tight transition-all duration-300">
                {feature.title}
              </h3>
              <p className="relative z-10 text-slate-600 leading-relaxed text-base font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal — outside .glass so position:fixed is relative to viewport (not the backdrop-filter parent) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />

          {/* Card: fixed height so top & bottom rounded corners are always visible with 24px margin */}
          <div
            className="relative w-full max-w-2xl flex flex-col bg-white border border-slate-200 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden"
            style={{ height: 'calc(100vh - 3rem)' }}
          >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/50 blur-[80px] rounded-full pointer-events-none z-0" />

            {/* Close button — sticky at top */}
            <div className="relative z-20 flex justify-end px-8 pt-8 pb-2 shrink-0">
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 min-h-0 overflow-y-auto px-8 pb-10 md:px-12 md:pb-12 relative z-10">

              {/* STEP 1 */}
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                  <div className="mb-2 text-sm font-bold tracking-widest text-teal-600 uppercase">Step 1 of 2</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 pr-8">How can we help?</h2>
                  <p className="text-slate-500 text-lg mb-8 font-medium">
                    To personalize your learning games, please select the primary condition or focus area.
                  </p>

                  <div className="grid gap-3 mb-10">
                    {conditions.map((cond) => (
                      <button
                        key={cond.id}
                        onClick={() => setSelectedCondition(cond.id)}
                        className={`relative flex items-center p-5 rounded-2xl border-2 text-left transition-all duration-300 ${
                          selectedCondition === cond.id
                            ? "bg-teal-50 border-teal-500 shadow-[0_4px_16px_rgba(20,184,166,0.15)]"
                            : "bg-white border-slate-100 shadow-sm hover:bg-slate-50 hover:border-slate-200 hover:shadow-md"
                        }`}
                      >
                        <div className="flex-1">
                          <div className={`font-bold text-lg mb-1 ${selectedCondition === cond.id ? "text-teal-800" : "text-slate-700"}`}>{cond.label}</div>
                          <div className={`text-sm font-medium ${selectedCondition === cond.id ? "text-teal-600/80" : "text-slate-500"}`}>{cond.desc}</div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedCondition === cond.id ? "bg-teal-500 border-teal-500 text-white" : "border-slate-300 bg-white"}`}>
                          {selectedCondition === cond.id && <Check size={14} strokeWidth={3} />}
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 animate-in fade-in duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />

          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.1)] animate-slide-up scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
            {/* Modal Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/50 blur-[80px] rounded-full pointer-events-none" />

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors z-20"
            >
              <X size={24} />
            </button>

            {/* STEP 1: Condition */}
            {step === 1 && (
              <div className="relative z-10 animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="mb-2 text-sm font-bold tracking-widest text-teal-600 uppercase">Step 1 of 2</div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 pr-8">
                  How can we help?
                </h2>
                <p className="text-slate-500 text-lg mb-8 font-medium">
                  To personalize your learning games, please select the primary condition or focus area.
                </p>

                <div className="grid gap-3 mb-10">
                  {conditions.map((cond) => (
                    <button
                      key={cond.id}
                      onClick={() => setSelectedCondition(cond.id)}
                      className={`relative flex items-center p-5 rounded-2xl border-2 text-left transition-all duration-300 ${selectedCondition === cond.id
                          ? "bg-teal-50 border-teal-500 shadow-[0_4px_16px_rgba(20,184,166,0.15)]"
                          : "bg-white border-slate-100 shadow-sm hover:bg-slate-50 hover:border-slate-200 hover:shadow-md"
                        }`}
                    >
                      <div className="flex-1">
                        <div className={`font-bold text-lg mb-1 ${selectedCondition === cond.id ? "text-teal-800" : "text-slate-700"}`}>
                          {cond.label}
                        </div>
                        <div className={`text-sm font-medium ${selectedCondition === cond.id ? "text-teal-600/80" : "text-slate-500"}`}>
                          {cond.desc}
                        </div>
                      </div>

                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedCondition === cond.id
                          ? "bg-teal-500 border-teal-500 text-white"
                          : "border-slate-300 bg-white"
                        }`}>
                        {selectedCondition === cond.id && <Check size={14} strokeWidth={3} />}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end mt-4 pt-6 border-t border-slate-100">
                  <button
                    onClick={handleNextStep}
                    disabled={!selectedCondition}
                    className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${selectedCondition
                        ? "bg-teal-600 text-white hover:bg-teal-500 hover:shadow-[0_8px_24px_rgba(13,148,136,0.3)] shadow-md"
                        : "bg-slate-100 text-slate-400 cursor-not-allowed"
                      }`}
                  >
                    Continue
                    <ChevronRight size={20} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Age & Language */}
            {step === 2 && (
              <div className="relative z-10 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="mb-2 text-sm font-bold tracking-widest text-sky-600 uppercase">Step 2 of 2</div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 pr-8">
                  About the Learner
                </h2>
                <p className="text-slate-500 text-lg mb-8 font-medium">
                  Help us tailor the experience by providing the age group and preferred language.
                </p>

                {/* Age Grid */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4 text-slate-700">
                    <Calendar size={20} className="text-sky-500" strokeWidth={2.5} />
                    <span className="font-bold text-lg">Age Group</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {ages.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => setSelectedAge(a.id)}
                        className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 ${selectedAge === a.id
                            ? "bg-sky-50 border-sky-500 shadow-[0_4px_16px_rgba(14,165,233,0.15)]"
                            : "bg-white border-slate-100 shadow-sm hover:bg-slate-50 hover:border-slate-200 hover:shadow-md"
                          }`}
                      >
                        <div className={`font-extrabold mb-1 text-lg ${selectedAge === a.id ? "text-sky-700" : "text-slate-700"}`}>
                          {a.label}
                        </div>
                        <div className={`text-xs font-medium ${selectedAge === a.id ? "text-sky-600/80" : "text-slate-500"}`}>
                          {a.desc}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end pt-6 border-t border-slate-100">
                    <button
                      onClick={handleNextStep}
                      disabled={!selectedCondition}
                      className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                        selectedCondition
                          ? "bg-teal-600 text-white hover:bg-teal-500 hover:shadow-[0_8px_24px_rgba(13,148,136,0.3)] shadow-md"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      Continue <ChevronRight size={20} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="mb-2 text-sm font-bold tracking-widest text-sky-600 uppercase">Step 2 of 2</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 pr-8">About the Learner</h2>
                  <p className="text-slate-500 text-lg mb-8 font-medium">
                    Help us tailor the experience by providing the age group and preferred language.
                  </p>

                  {/* Age Grid */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4 text-slate-700">
                      <Calendar size={20} className="text-sky-500" strokeWidth={2.5} />
                      <span className="font-bold text-lg">Age Group</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {ages.map((a) => (
                        <button
                          key={a.id}
                          onClick={() => setSelectedAge(a.id)}
                          className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 ${
                            selectedAge === a.id
                              ? "bg-sky-50 border-sky-500 shadow-[0_4px_16px_rgba(14,165,233,0.15)]"
                              : "bg-white border-slate-100 shadow-sm hover:bg-slate-50 hover:border-slate-200 hover:shadow-md"
                          }`}
                        >
                          <div className={`font-extrabold mb-1 text-lg ${selectedAge === a.id ? "text-sky-700" : "text-slate-700"}`}>{a.label}</div>
                          <div className={`text-xs font-medium ${selectedAge === a.id ? "text-sky-600/80" : "text-slate-500"}`}>{a.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Language Grid */}
                  <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4 text-slate-700">
                      <Globe size={20} className="text-emerald-500" strokeWidth={2.5} />
                      <span className="font-bold text-lg">Primary Language</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {languages.map((l) => (
                        <button
                          key={l.id}
                          onClick={() => setSelectedLang(l.id)}
                          className={`flex-1 min-w-[110px] p-3 rounded-2xl border-2 text-center transition-all duration-300 font-bold ${
                            selectedLang === l.id
                              ? "bg-emerald-50 border-emerald-500 text-emerald-700 shadow-[0_4px_16px_rgba(16,185,129,0.15)]"
                              : "bg-white border-slate-100 text-slate-600 shadow-sm hover:bg-slate-50 hover:border-slate-200 hover:text-slate-800 hover:shadow-md"
                          }`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                    <button
                      onClick={() => setStep(1)}
                      className="flex items-center gap-2 px-6 py-4 rounded-full font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all duration-300"
                    >
                      <ChevronLeft size={20} strokeWidth={2.5} /> Back
                    </button>
                    <button
                      onClick={handleFinish}
                      disabled={!selectedAge || !selectedLang}
                      className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                        selectedAge && selectedLang
                          ? "bg-sky-600 text-white hover:bg-sky-500 hover:shadow-[0_8px_24px_rgba(14,165,233,0.3)] shadow-md"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      Finish <Check size={20} strokeWidth={3} className={selectedAge && selectedLang ? "opacity-100 w-5" : "opacity-0 w-0"} />
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}