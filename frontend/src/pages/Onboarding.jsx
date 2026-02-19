import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="glass">
      <h1>Welcome to NeuroByte</h1>
      <h3>Select Learning Profile</h3>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {["ADHD", "PTSD", "Autism", "Dyscalculia"].map((item) => (
          <button key={item}>{item}</button>
        ))}
      </div>

      <br />
      <button onClick={() => navigate("/assessment")}>
        Continue →
      </button>
    </div>
  );
}
