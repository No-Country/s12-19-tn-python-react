import { Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./Pages/Register/Form";
import Inicio from "./pages/Inicio";
import Navbar from "./components/Navbar";
import NewPorpertie from "./Pages/NewPropertie";



function App() {
  return (
    <>      
    <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="new-propertie" element={<NewPorpertie/>} />
      </Routes>
      <Routes>
        <Route path="register" element={<Form/>} />
      </Routes>
    </>
  );
}

export default App;
