import { Routes, Route } from "react-router-dom";
import "./App.css";
import Properties from "./components/Properties";
import Inicio from "./pages/Inicio";
import Navbar from "./components/Navbar";
import NewPorpertie from "./Pages/NewPropertie";
import Form from "./components/Form";
import Login from "./components/Login";
import ForgotPassword from './components/ForgotPassword';
import NewPassword from "./components/NewPassword";
import ConfirmAccount from "./components/ConfirmAccount";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/new-propertie" element={<NewPorpertie />} />
        <Route path="/register" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/forgot-password/:token' element={<NewPassword/>}/>
        <Route path='/confirm/:token' element={<ConfirmAccount/>}/>
      </Routes>

        <Route path="new-propertie" element={<NewPorpertie/>} />
        <Route path="register" element={<Form/>} />
      </Routes>
      
    </>
  );
}

export default App;
