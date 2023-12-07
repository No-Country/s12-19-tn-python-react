import React, { useState } from "react";
import "../style/Inicio.css";
import Carrousel from "../components/Carousel";

const Inicio = () => {

  
  const [formData, setFormData] = useState({
    destination: "",
    salida: "",
    numberOfPersons: "",
    tipoDeCasa: "",
  });
  const [date, setDate] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  const handleDate = () => {
    setDate(true);
  };

  return (
    <section className="home">
      <section className="container__form">
      <form className="home__form" onSubmit={handleSubmit} action="">
       
        
        <select
          className="home__select--destino"
          name="destination"
          id=""
          value={formData.destination}
          onChange={handleInputChange}
        >
          <option value="" disabled selected hidden>
            Destino
          </option>
          <option value="Barcelona">Barcelona</option>
          <option value="Cartagena">Cartagena</option>
          <option value="Cali">Cali</option>
        </select>
       

        <button className="home__button--date" type="button" onClick={handleDate}>
          {date ? (
            <input
              className="home__input--date"
              placeholder="salida"
              type="date"
              name="salida"
              onChange={handleInputChange}
              value={formData.salida}
            />
          ) : (
            <span className="home__span--date"><img src="./src/assets/home/calendar-icon.png" alt="" /> Chek-in / Salida </span>
          )}
        </button>

        <input
          className="home__input--numberofperson"
          placeholder="numero de personas"
          type="number"
          name="numberOfPersons"
          onChange={handleInputChange}
          value={formData.numberOfPersons}
        />

        <select
          className="home__select--propiedad"
          name="tipoDeCasa"
          id=""
          onChange={handleInputChange}
          value={formData.tipoDeCasa}
        >
          <option value="" disabled selected hidden>
            Tipo de casa
          </option>
          <option value="Grande">Grande</option>
          <option value="Pequena">Pequeña</option>
          <option value="Cavana">Cabaña</option>
        </select>

        <button className="home__button--search" type="submit">
          Buscar
        </button>
      </form>
      </section>
      <Carrousel/>
    </section>
  );
};

export default Inicio;
