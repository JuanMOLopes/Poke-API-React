import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Pokedex() {
  const [pokemonDigitado, setPokemonDigitado] = useState("");
  const [pokemonEncontrado, setPokemonEncontrado] = useState(null);
  const [erro, setErro] = useState("");
  const [pokemonSalvo, setPokemonSalvo] = useState(
    () => JSON.parse(localStorage.getItem("informacoesPokemon")) || []
  );
  const [favoritar, setFavoritar] = useState(false);

  async function fetchPokemons(input) {
    if (input === "") {
      throw new Error("Pokémon não encontrado");
    }
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

  useEffect(() => {
    if (pokemonEncontrado) {
      const novoPokemon = {
        id: pokemonEncontrado.id,
        nome: pokemonEncontrado.name,
        imagem: pokemonEncontrado.sprites.front_default,
        tipos: pokemonEncontrado.types,
        habilidades: pokemonEncontrado.abilities,
        estatisticas: pokemonEncontrado.stats,
      };

      const pokemonsAtualizados = [...pokemonSalvo, novoPokemon];

      localStorage.setItem(
        "informacoesPokemon",
        JSON.stringify(pokemonsAtualizados)
      );
    }
  }, [favoritar]);

  if (erro) return <h2>Erro: {erro}</h2>;

  return (
    <>
      <Header />
      <Navbar />

      <div className="Pesquisa">
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
            <h3>
              {pokemonEncontrado.name} (#{pokemonEncontrado.id})
            </h3>

            <img src={pokemonEncontrado.sprites.front_default} />

            <p>Tipos:</p>
            <ul>
              {pokemonEncontrado.types.map((tipo, index) => (
                <li key={index}>{tipo.type.name}</li>
              ))}
            </ul>

            <p>Habilidades:</p>
            <ul>
              {pokemonEncontrado.abilities.map((habilidade, index) => (
                <li key={index}>{habilidade.ability.name}</li>
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

            <button onClick={() => setFavoritar(!favoritar)}>
              {favoritar ? "Favorito" : "Favoritar"}
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Pokedex;
