import "../style/Inicio.css";
import DateFilters from "./componentsSimpleFilter/Dates";
import Destination from "../components/componentsSimpleFilter/Destination";
import Properties from "./componentsSimpleFilter/Properties";
import ImputNumber from "./componentsSimpleFilter/ImputNumber";
import useSimpleFilterState from "../store/SimpleFilterStore";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const {resetState } = useSimpleFilterState();
   const navigate = useNavigate()
  const handleClick = () => {
    navigate("/propiedad")
    resetState()
  };

  return (
    <div className="home__form" >
      <Destination />
      <DateFilters />
      <ImputNumber />
      <Properties />

      <button
        onClick={handleClick}
        className="home__button--search"
        type="submit"
      >
        Buscar
      </button>
    </div>
  );
};

export default Inicio;
