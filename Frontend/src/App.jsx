import { Route, Routes, Outlet } from 'react-router-dom';
import Nabvar from "./components/Navbar"
import Home from "./Pages/Home"
import "./App.css";

function App() {
  return (
    <div>
      <Nabvar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
