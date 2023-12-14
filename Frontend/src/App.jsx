import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Properties from "./components/Properties";
import Inicio from "./pages/Inicio";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ForgotPassword from './components/ForgotPassword';
import NewPassword from "./components/NewPassword";
import ConfirmAccount from "./components/ConfirmAccount";
import Propiedad from "./pages/Popiedad"
import UserForm from "./components/UserForm";
import NewPropertie from './pages/NewPropertie';
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <>
    <AuthProvider>
      <Navbar />
      <div className="App-body">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="propiedad" element={<Propiedad/>}/>
        <Route path="/properties" element={<Properties />} />
        <Route path="/new-propertie" element={<NewPropertie />} />
        <Route path="/register" element={<UserForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/forgot-password/:token' element={<NewPassword/>}/>
        <Route path='/confirm/:token' element={<ConfirmAccount/>}/>
      </Routes>
      </div>
      </AuthProvider>
    </>
  );
}

export default App;
