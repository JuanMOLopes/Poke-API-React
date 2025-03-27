import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function Favoritos() {
  const [pokemon] = useState(() => JSON.parse(localStorage.getItem("pokemon")) || "");
  const [informacoesPokemon, setInformacoesPokemon] = useState(
    () => JSON.parse(localStorage.getItem("informacoesPokemon")) || []
  );

  return (
    <>
    
    </>
  );
}

<Footer/>

export default Favoritos;
