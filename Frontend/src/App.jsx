import { Routes, Route } from "react-router-dom";
import Nabvar from "./components/Navbar"
import "./App.css";
import Home from "./pages/Home";


function App() {
  return (
    <div>
       <Nabvar/>
       <Routes>
       <Route  path="/" element={<Home/>} />
       </Routes>
    </div>
  );
} 

export default App;
