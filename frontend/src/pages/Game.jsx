import { useNavigate } from "react-router-dom";

export default function Game() {
  const navigate = useNavigate();

  return (
    <div className="glass" style={{ textAlign: "center" }}>
      <h2>Live Game Area</h2>

      <div
        style={{
          height: "300px",
          background: "#0f172a",
          borderRadius: "20px",
          margin: "20px 0"
        }}
      >
        🎯 Dynamic Game Canvas
      </div>

      <div style={{ fontSize: 12, opacity: 0.7 }}>
        Emotion Indicator ●
      </div>

      <button onClick={() => navigate("/transition")}>
        End Round
      </button>
    </div>
  );
}
