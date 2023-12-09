import React from "react";
import { Select } from "antd";
import useSimpleFilterState from "../../store/SimpleFilterStore";

  const Destination = () => {
    const { setDestination } = useSimpleFilterState();
    const cities = [
      { value: "paris", label: "París" },
      { value: "new-york", label: "Nueva York" },
      { value: "tokyo", label: "Tokio" },
      { value: "rome", label: "Roma" },
      { value: "sydney", label: "Sídney" },
    ];
    return (
      <Select
        className="home__select--destino"
        placeholder="Selecciona una ciudad"
        style={{
          width: 200,
        }}
        onChange={setDestination}
        options={cities.map((city) => ({
          value: city.value,
          label: city.label,
        }))}
      />
    );
  };
  
export default Destination;
