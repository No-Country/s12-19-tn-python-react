import { Routes, Route } from "react-router-dom";
import Nabvar from "./components/Navbar"
import Home from "./pages/Inicio"

import "./App.css";




function App() {
  return (
    <>
       <Nabvar/>
       <Routes>
       <Route  path="/" element={<Home/>} />
       </Routes>
       
    </>
  );
}

export default App;
