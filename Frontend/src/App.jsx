import data from "../data.json";
import "./App.css";

function App() {
  return (
    <div>
      //aqui esta el como se podria tulizar para crear el componente o la page de  las card 
      {data.map((city) => (
        <div>
          <h1>{city.name}</h1>
          <img src={city.images} alt="" />
          <p>{city.description}</p>
          <p>{city.location}</p>
         <span>price per week: {city.precio}</span>
         <span>{city.rating}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
