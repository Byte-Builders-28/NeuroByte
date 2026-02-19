export default function Settings() {
  return (
    <div className="glass">
      <h2>Settings</h2>

      <label>
        <input type="checkbox" /> Enable Webcam Emotion Detection
      </label>

      <br /><br />

      <select>
        <option>English</option>
        <option>Hindi</option>
        <option>Bengali</option>
      </select>
    </div>
  );
}
