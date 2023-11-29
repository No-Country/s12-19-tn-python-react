import React, { useState } from 'react';
import '../style/Home.css';

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
                <img src="/src/assets/home/Group-icon.png" alt="Destino" id='icon-group'/>
                <input type="text" id="text-destiny" name="text" placeholder='Destino' />
            </div>
            <div className="input-container">
                <img src="/src/assets/home/calendar-icon.png" alt="Check-in / salida" id='calendar-icon'/>
                <input type="date" id="check-in" name="check-in" placeholder='Check-in / salida' />
            </div>
            <div className="input-container">
                <img src="/src/assets/home/user-icon.png" alt="Adultos" id='user-icon'/>
                <input
                    type="number"
                    id="adults"
                    name="adults"
                    value={adults}
                    onChange={handleAdultsChange}
                    placeholder='Adultos'
                />
            </div>
            <div className="input-container">
                <img src="/src/assets/home/home-icon.png" alt="Tipo de propiedad" id='property'/>
                <label htmlFor="property-type">Tipo de propiedad</label>
                <select id="property-type" name="property-type">
                    <option value="apartment">Apartamento</option>
                    <option value="house">Casa</option>
                </select>
            </div>
            <button type="button" id="search-button">Buscar</button>
        </main>
    );
};

export default Home;
