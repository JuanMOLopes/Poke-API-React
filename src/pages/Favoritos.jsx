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
      {informacoesPokemon.map((pokemon, index) => (
        <li key={index}>
          {pokemon && (
            <div>
              <h3>
                {pokemon.nome} (#{pokemon.id})
              </h3>

              <img src={pokemon.imagem} />

              <p>Tipos:</p>
              <ul>
                {pokemon.tipos.map((tipo, index) => (
                  <li key={index}>{tipo.type.name}</li>
                ))}
              </ul>

              <p>Habilidades:</p>
              <ul>
                {pokemon.habilidades.map((habilidade, index) => (
                  <li key={index}>{habilidade.ability.name}</li>
                ))}
              </ul>

              <p>Estatísticas:</p>
              <ul>
                {pokemon.estatisticas.map((estatistica, index) => (
                  <li key={index}>
                    {estatistica.stat.name}: {estatistica.base_stat}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
      <Footer />
    </>
  );
}

export default Pokedex;
