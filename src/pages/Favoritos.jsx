import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Favoritos() {
function Pagina2() {
  const [pokemon] = useState(() => JSON.parse(localStorage.getItem("pokemon")) || "");
  const [informacoesPokemon, setInformacoesPokemon] = useState(
    () => JSON.parse(localStorage.getItem("informacoesPokemon")) || []
  );

  return (
    <>
    <Header/>
    <Navbar/>

    
    {pokemon !== "" ? (
        <div>
          <h1>{pokemon}</h1>
          {pokemonEscolhido !== "" && (
        <img
          src={pokemonApi.find((e) =>  === pokemonEscolhido)}
          alt=""
        />
      )}
        </div>
      ) : (
        <div>
          <h2>Pesquise um pokemon</h2>
        </div>
    </>
  );
}

<Footer/>

export default Favoritos;

