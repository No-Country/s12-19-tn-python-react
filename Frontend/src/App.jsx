import { Routes, Route } from "react-router-dom";
import Nabvar from "./components/Navbar"
import Home from "./pages/Inicio"

import "./App.css";
import Properties from "./components/Properties";




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
