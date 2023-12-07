import React from "react";
import { Select } from "antd";

const App = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select
    className="home__select--destino"
      defaultValue="Destino"
      style={{
        width: 200,
      }}
      onChange={handleChange}
      options={[
        {
          value: "jack",
          label: "Lucy",
          value: "lucy",
        },
      ]}
    />
  );
};
export default App;
