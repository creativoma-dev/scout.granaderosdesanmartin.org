// Dependecies
import { useEffect } from "react";

// Components
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import Historia from "./components/Historia.jsx";
import Ramas from "./components/Ramas.jsx";
import Footer from "./components/Footer.jsx";
import Actividades from "./components/Actividades.jsx";

// Styles
import "./output.css";
import Contacto from "./components/Contacto.jsx";

const App = () => {
  
  useEffect(() => {
    import('preline');
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <Historia />
      <Actividades />
      <Ramas />
      <Contacto />
      <Footer />
    </>
  );
};

export default App;