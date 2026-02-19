import { useNavigate } from "react-router-dom";

export default function Assessment() {
  const navigate = useNavigate();

  return (
    <div className="glass">
      <h2>Mini Cognitive Game</h2>
      <p>Answer naturally. Just have fun 🎮</p>

      <button onClick={() => navigate("/game")}>
        Start Game
      </button>
    </div>
  );
}
