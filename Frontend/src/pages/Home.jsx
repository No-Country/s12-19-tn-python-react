import { useState } from "react";
import "../style/home.css";
import Carrousel from "../components/Carousel"




const Home = () => {
  // Estado para manejar el valor del campo de número de adultos
  const [adults, setAdults] = useState(2);

  // Función para manejar los cambios en el campo de número de adultos
  const handleAdultsChange = (e) => {
    setAdults(e.target.value);
  };

  return (
    
    <main>
      <div className="input-container">
        <img
          src="/src/assets/home/Group-icon.png"
          alt="Destino"
          id="icon-group"
        />
        <input
          type="text"
          id="text-destiny"
          name="text"
          placeholder="Destino"
        />
      </div>
      <div className="input-container">
        <img
          src="/src/assets/home/calendar-icon.png"
          alt="Check-in / salida"
          id="calendar-icon"
        />
        <input
          type="date"
          id="check-in"
          name="check-in"
          placeholder="Check-in / salida"
        />
      </div>
      <div className="input-container">
        <img
          src="/src/assets/home/user-icon.png"
          alt="Adultos"
          id="user-icon"
        />
        <input
          type="number"
          id="adults"
          name="adults"
          value={adults}
          onChange={handleAdultsChange}
          placeholder="Adultos"
        />
      </div>
      <div className="input-container">
        <img
          src="/src/assets/home/home-icon.png"
          alt="Tipo de propiedad"
          id="property"
        />
        <input
          type="text"
          id="text-property"
          name="text"
          placeholder="Tipo de propiedad"
        />
      </div>
      <div className="button-container">
        <button type="button" id="search-button">
          Buscar
        </button>
      </div>
      <Carrousel/>
    </main>
    
    
  );
};

export default Home;
