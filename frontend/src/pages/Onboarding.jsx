import { useNavigate } from "react-router-dom";
import Ballpit from "../components/Ballpit";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="glass">
    
<div style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%'}}>
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
