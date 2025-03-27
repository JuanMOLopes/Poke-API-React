import { useState } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Pokedex() {
  const [pokemonDigitado, setPokemonDigitado] = useState("");
  const [pokemonEncontrado, setPokemonEncontrado] = useState(null);
  const [erro, setErro] = useState("");

  async function fetchPokemons(input) {
    input.preventDefault();
    
    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonDigitado.toLowerCase()}`
      );
      if (!resposta.ok) {
        throw new Error("Pokémon não encontrado");
      }

      const dados = await resposta.json();
      setPokemonEncontrado(dados);
    } catch (erro) {
      setErro(erro.message);
    }
  }

  if (erro) return <h2>Erro: {erro}</h2>;

  return (
    <>
      <Header />
      <Navbar />

        <h2>Capture um pokémon!</h2>
        <form onSubmit={fetchPokemons}>
          <input
            type="text"
            value={pokemonDigitado}
            onChange={(input) => setPokemonDigitado(input.target.value)}
            placeholder="Digite um número ou o nome de um pokémon"
          />
          <button type="submit">Buscar</button>
        </form>

        {pokemonEncontrado && (
          <div>
            <h3>{pokemonEncontrado.name} (#{pokemonEncontrado.id})</h3>
            
            <img src={pokemonEncontrado.sprites.front_default}/>
            
              <p>Tipos:</p>
              <ul>
                {pokemonEncontrado.types.map((tipo, index) => (
                  <li key={index}>{tipo.type.name}</li>
                ))}
              </ul>

              <p>Habilidades:</p>
              <ul>
                {pokemonEncontrado.abilities.map((habilidade, index) => (
                  <li key={index}>
                    {habilidade.ability.name}
                  </li>
                ))}
              </ul>
            
              <p>Estatísticas:</p>
              <ul>
                {pokemonEncontrado.stats.map((estatistica, index) => (
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