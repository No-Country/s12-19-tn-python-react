import { Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./Pages/Register/Form";
import Inicio from "./pages/Inicio";
import { useState } from "react";
import AuthLayout from "./layouts/AuthLayout";
import Navbar from "./components/Navbar";
import NewPorpertie from "./Pages/NewPropertie";



function App() {
  const [showNavbar, setShowNavbar] = useState(true)

  return (
    <>      
    <Navbar />
      <Routes>
        <Route path="/" element={<AuthLayout />} />
        <Route index element={<Inicio/>} />
        <Route path="new-propertie" element={<NewPorpertie/>} />
      </Routes>
      <Routes>
        <Route path="register" element={<Form/>} />
      </Routes>
    </>
  );
}

export default App;
