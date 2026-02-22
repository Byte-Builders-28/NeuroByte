import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { User, Mail, Lock, Eye, EyeOff, ArrowLeft, Loader2 } from "lucide-react";

export default function UserAuth() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        try {
            if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
                navigate("/");
            } else {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: { data: { role: "user" } },
                });
                if (error) throw error;
                setSuccess("Account created! Check your email for verification.");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page auth-page-user">
            {/* Animated background shapes */}
            <div className="auth-bg-shape auth-bg-shape-1" />
            <div className="auth-bg-shape auth-bg-shape-2" />
            <div className="auth-bg-shape auth-bg-shape-3" />

            <div className="auth-form-container animate-slide-up">
                <Link to="/auth" className="auth-back-link">
                    <ArrowLeft size={18} strokeWidth={2.5} />
                    <span>Back</span>
                </Link>

                <div className="auth-form-card">
                    <div className="auth-form-icon auth-form-icon-user">
                        <User size={28} strokeWidth={2} />
                    </div>
                    <h1 className="auth-form-title">
                        {isLogin ? "Learner Login" : "Create Learner Account"}
                    </h1>
                    <p className="auth-form-subtitle">
                        {isLogin
                            ? "Sign in to continue your learning journey."
                            : "Create your account and start exploring."}
                    </p>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="auth-input-group">
                            <Mail size={18} className="auth-input-icon" />
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="auth-input"
                            />
                        </div>

                        <div className="auth-input-group">
                            <Lock size={18} className="auth-input-icon" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                className="auth-input"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="auth-eye-btn"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        {error && <div className="auth-error">{error}</div>}
                        {success && <div className="auth-success">{success}</div>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="auth-submit-btn auth-submit-user"
                        >
                            {loading ? (
                                <Loader2 size={20} className="auth-spinner" />
                            ) : isLogin ? (
                                "Sign In"
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>

                    <div className="auth-toggle">
                        <span>
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                        </span>
                        <button onClick={() => { setIsLogin(!isLogin); setError(""); setSuccess(""); }}>
                            {isLogin ? "Sign Up" : "Sign In"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
