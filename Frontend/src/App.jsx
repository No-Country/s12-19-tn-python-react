import { Routes, Route } from "react-router-dom";
import "./App.css";
import Propiedad from "./pages/Popiedad"
import Inicio from "./pages/Inicio";
import Navbar from "./components/Navbar";
import NewPorpertie from "./Pages/NewPropertie";
import Form from "./components/Form";



function App() {
  return (
    <>      
    <Navbar />
      <Routes>
        <Route path="propiedad" element={<Propiedad/>}/>
        <Route path="/" element={<Inicio />} />
        <Route path="new-propertie" element={<NewPorpertie/>} />
        <Route path="register" element={<Form/>} />
      </Routes>
    </>
  );
}

export default App;
