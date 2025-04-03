import "./Footer.css";
import Github from "/GitHub.png";

function Footer() {
  return (
    <footer>
      <div id="contato">
        <a href="https://github.com/JuanMOLopes/Poke-API-React.git">
          <img src={Github} alt="GitHub" />
          GitHub
        </a>
        <p>https://github.com/JuanMOLopes/Poke-API-React.git</p>
      </div>
      <div className="lado-a-lado">
        <div>
          <p className="copyright">© Grupo 2 - Todos os direitos reservados</p>
        </div>
        <div>
          <ul>
            <li>Agatha Aline França</li>
            <li>Ana Beatriz Farias Pereira</li>
            <li>Juan Matheus de Oliveira Lopes</li>
            <li>Lucas Aguiar Pereira Marin</li>
            <li>Zayra Alice França</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
