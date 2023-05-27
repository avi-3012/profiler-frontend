import { Routes, Route } from "react-router-dom";

import Profiler from "./pages/Profiler";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateProfile from "./pages/CreateProfile";

function App() {
  return (
    <Routes>
      <Route path="/profiler" element={<Profiler />} />
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/createprofile" element={<CreateProfile />} />
    </Routes>
  );
}

export default App;
