import { useNavigate } from "react-router-dom";
import { ShieldCheck, User, Brain, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function AuthOptions() {
    const navigate = useNavigate();
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="auth-options-page">
            {/* Animated SVG Waves */}
            <div className="auth-waves-container">
                <svg
                    className="auth-wave auth-wave-1"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="rgba(16, 185, 129, 0.15)"
                        d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,224C672,235,768,213,864,186.7C960,160,1056,128,1152,133.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
                <svg
                    className="auth-wave auth-wave-2"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="rgba(5, 150, 105, 0.12)"
                        d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
                <svg
                    className="auth-wave auth-wave-3"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="rgba(4, 120, 87, 0.10)"
                        d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,250.7C672,267,768,277,864,261.3C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>

            {/* Floating Orbs */}
            <div className="auth-orb auth-orb-1" />
            <div className="auth-orb auth-orb-2" />
            <div className="auth-orb auth-orb-3" />

            {/* Content */}
            <div className="auth-options-content">
                {/* Branding */}
                <div className="auth-brand animate-slide-up">
                    <div className="auth-brand-icon">
                        <Brain size={28} strokeWidth={2.5} />
                    </div>
                    <span className="auth-brand-text">NeuroByte</span>
                </div>

                <h1 className="auth-title animate-slide-up delay-100">
                    Welcome Back
                </h1>
                <p className="auth-subtitle animate-slide-up delay-200">
                    Choose how you'd like to continue
                </p>

                {/* Cards */}
                <div className="auth-cards-grid animate-slide-up delay-300">
                    {/* Parent Card */}
                    <div
                        className={`auth-option-card auth-card-parent ${hoveredCard === "parent" ? "auth-card-hovered" : ""}`}
                        onMouseEnter={() => setHoveredCard("parent")}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={() => navigate("/auth/parent")}
                    >
                        <div className="auth-card-glow auth-glow-parent" />
                        <div className="auth-card-icon auth-icon-parent">
                            <ShieldCheck size={32} strokeWidth={2} />
                        </div>
                        <h2 className="auth-card-title">Parent / Admin</h2>
                        <p className="auth-card-desc">
                            Monitor progress, manage settings, and view detailed reports.
                        </p>
                        <div className="auth-card-action">
                            <span>Continue</span>
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* User Card */}
                    <div
                        className={`auth-option-card auth-card-user ${hoveredCard === "user" ? "auth-card-hovered" : ""}`}
                        onMouseEnter={() => setHoveredCard("user")}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={() => navigate("/auth/user")}
                    >
                        <div className="auth-card-glow auth-glow-user" />
                        <div className="auth-card-icon auth-icon-user">
                            <User size={32} strokeWidth={2} />
                        </div>
                        <h2 className="auth-card-title">Learner</h2>
                        <p className="auth-card-desc">
                            Jump into adaptive games and therapeutic learning experiences.
                        </p>
                        <div className="auth-card-action">
                            <span>Continue</span>
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
