import { Routes, Route } from "react-router-dom";
import "./App.css";
import Properties from "./components/Properties";

import Inicio from "./pages/Inicio";
import Navbar from "./components/Navbar";
import NewPorpertie from "./Pages/NewPropertie";



function App() {
  return (
    <>
       <Nabvar/>
       <Routes>
       <Route  path="/" element={<Home/>} />
       <Route  path="/properties" element={<Properties/>} />
       </Routes>
       
    </>
  );
}

export default App;
