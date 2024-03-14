import "./App.css";
import { Route,  Routes } from "react-router-dom";
import axios from "axios";

import Homepage from "./pages/homepage";
import Navbar from "./pages/Nav";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
