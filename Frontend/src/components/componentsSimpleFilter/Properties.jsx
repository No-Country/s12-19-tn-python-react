import React from "react";
import { Select } from "antd";
import useSimpleFilterState from "../../store/SimpleFilterStore";



const Properties = () => {
  const { setProperty } = useSimpleFilterState();
  const propertyTypes = [
    { value: "apartment", label: "Apartamento" },
    { value: "cabin", label: "Cabaña" },
    { value: "beachfront", label: "Orilla de la playa" },
    { value: "villa", label: "Villa" },
  ];
  return (
    <Select
      className="home__select--propiedad"
      placeholder="Selecciona un tipo de propiedad"
      style={{
        width: 200,
      }}
      onChange={setProperty}
      options={propertyTypes.map((propertyType) => ({
        value: propertyType.value,
        label: propertyType.label,
      }))}
    />
  );
};
export default Properties;
