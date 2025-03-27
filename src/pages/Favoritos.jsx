import { useState } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Pokedex() {
  const [informacoesPokemon, setInformacoesPokemon] = useState(
    () => JSON.parse(localStorage.getItem("informacoesPokemon")) || []
  );

  return (
    <>
      <Header />
      <Navbar />

      <h2>Pokémons salvos!</h2>
      {informacoesPokemon  && (
        <div>
          <h3>
            {informacoesPokemon.nome} (#{informacoesPokemon.id})
          </h3>

          <img src={informacoesPokemon.imagem} />

          <p>Tipos:</p>
          <ul>
            {informacoesPokemon.types.map((tipo, index) => (
              <li key={index}>{tipo.type.name}</li>
            ))}
          </ul>

          <p>Habilidades:</p>
          <ul>
            {informacoesPokemon.habilidades.map((habilidade, index) => (
              <li key={index}>{habilidade.ability.name}</li>
            ))}
          </ul>

          <p>Estatísticas:</p>
          <ul>
            {informacoesPokemon.estatisticas.map((estatistica, index) => (
              <li key={index}>
                {estatistica.stat.name}: {estatistica.base_stat}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Pokedex;
