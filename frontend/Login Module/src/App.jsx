import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PasswordRecovery from "./pages/PasswordRecovery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />   {/* Login is the default page */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/PasswordRecovery" element={<PasswordRecovery />} />
      </Routes>
    </Router>
  );
};

export default App
