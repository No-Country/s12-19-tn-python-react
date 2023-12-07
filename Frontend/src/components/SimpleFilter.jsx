import React, { useState } from "react";
import "../style/Inicio.css";
import DateFilters from "./componentsSimpleFilter/Dates";
import Destination from "../components/componentsSimpleFilter/Destination"



const Inicio = () => {


  return (
    <form className="home__form" action="">
     <Destination/>

     <DateFilters/>

      <input
        className="home__input--numberofperson"
        placeholder="numero de personas"
        type="number"
        name="numberOfPersons"
      
      />

      <select
        className="home__select--propiedad"
        name="tipoDeCasa"
        id=""
     
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
  );
};

export default Inicio;
