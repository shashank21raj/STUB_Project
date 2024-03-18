import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Homepage from "./pages/homepage";
import Navbar from "./pages/Nav";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import ProfilePage from "./pages/profile";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const [forSignin, setForSignin] = useState(false);
  console.log("This is the current state ", currentUser);
  return (
    <BrowserRouter>
      <>
        {currentUser ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </>
        ) : forSignin ? (
          <SignIn setForSignin={setForSignin} />
        ) : (
          <SignUp setForSignin={setForSignin} />
        )}
      </>
    </BrowserRouter>
  );
}

export default App;
