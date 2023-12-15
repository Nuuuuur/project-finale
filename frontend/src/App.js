import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutUs from "./pages/aboutus";
import Navbar from "./components/Navbar";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/home"
              element={user ? <Home /> : <Navigate to="/aboutus" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/home" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/home" />}
            />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
