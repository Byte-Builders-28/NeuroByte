import { useNavigate } from "react-router-dom";

export default function Transition() {
  const navigate = useNavigate();

  return (
    <div className="glass" style={{ textAlign: "center" }}>
      <h2>Great Work 👏</h2>
      <p>Take a deep breath...</p>

      <div style={{ fontSize: 40 }}>🌬️</div>

      <br />
      <button onClick={() => navigate("/game")}>
        Next Round
      </button>
    </div>
  );
}
