
import "./App.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import "./index.css"
import { Navigate, Route,Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import { useAuthContest } from "./context/AuthContest";

function App() {
  const {authUser} = useAuthContest()

  return (
    <div className="p-4 h-screen flex items-center justify-center">
    <Routes>
      <Route path="/" element={authUser?<Home />:<Navigate to="/login" /> } />
      <Route path="/login" element={authUser?<Navigate to="/" />:<Login /> } />
      <Route path="/signup" element={authUser?<Navigate to="/" />:<Signup /> } />
    </Routes>
    <Toaster />
    </div>
  );
}

export default App;
