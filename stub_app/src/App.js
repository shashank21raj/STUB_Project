import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Homepage from "./pages/homepage";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
