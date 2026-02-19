import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Onboarding from "./pages/Onboarding";
import Assessment from "./pages/Assesment";
import Game from "./pages/Game";
import Transition from "./pages/Transition";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/game" element={<Game />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;
