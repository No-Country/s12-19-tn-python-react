import { Routes, Route } from "react-router-dom";
import Nabvar from "./components/Navbar"
import "./App.css";
import Home from "./components/Home";


function App() {
  return (
    <div>
       <Nabvar/>
       <Routes>
       <Route  path="/home" element={<Home/>} />
       </Routes>
    </div>
  );
} 

export default App;
