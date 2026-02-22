import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Onboarding from "./pages/Onboarding";
import Assessment from "./pages/Assesment";
import Game from "./pages/Game";
import Transition from "./pages/Transition";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import AuthOptions from "./pages/AuthOptions";
import ParentAuth from "./pages/ParentAuth";
import UserAuth from "./pages/UserAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/auth" element={<AuthOptions />} />
      <Route path="/auth/parent" element={<ParentAuth />} />
      <Route path="/auth/user" element={<UserAuth />} />
      <Route path="/assessment" element={<Layout><Assessment /></Layout>} />
      <Route path="/game" element={<Layout><Game /></Layout>} />
      <Route path="/transition" element={<Layout><Transition /></Layout>} />
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/settings" element={<Layout><Settings /></Layout>} />
    </Routes>
  );
}

export default App;