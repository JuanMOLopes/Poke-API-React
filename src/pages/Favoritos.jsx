import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Pokedex() {
  const [informacoesPokemon, setInformacoesPokemon] = useState(
    () => JSON.parse(localStorage.getItem("informacoesPokemon")) || []
  );
  const [modoEscuro, setModoEscuro] = useState(
    () => JSON.parse(localStorage.getItem("modoEscuro")) || false
  );

  localStorage.setItem("modoEscuro", JSON.stringify(modoEscuro));
  useEffect(() => {
    if (modoEscuro == true) {
      document.body.classList.add("escuro");
    } else {
      document.body.classList.remove("escuro");
    }
  }, [modoEscuro]);

  return (
    <>
      <Header />
      <Navbar />

      <div className="Pesquisa">
        <h2>Pokémons salvos!</h2>

        <button onClick={() => setModoEscuro(!modoEscuro)}>
          {modoEscuro ? "Modo Claro" : "Modo Escuro"}
        </button>
      </div>

      {informacoesPokemon.map((pokemon, index) => (
        <div className="Pesquisa">
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
        </div>
      ))}
      <Footer />
    </>
  );
}

export default Pokedex;
