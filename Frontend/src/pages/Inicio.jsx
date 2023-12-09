import SimpleFilter from "../components/SimpleFilter"
import Carrousel from "../components/Carousel"
import "../style/Inicio.css";


const Inicio = () => {


  return (
    <section className="home">
      <section className="container__form">
       <SimpleFilter/>
      </section>
      <Carrousel/>
    </section>
  );
};

export default Inicio;
