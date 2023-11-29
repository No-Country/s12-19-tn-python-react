import { Routes, Route } from "react-router-dom";
import Nabvar from "./components/Navbar"
import Home from "./pages/Home"
import Carrousel from "./components/Carousel"
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
