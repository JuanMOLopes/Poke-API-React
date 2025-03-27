import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src="" alt="" className="logo"/>
        </Link>

        <h1>Poké-API</h1>
      </header>
   </>
  );
}

export default Header;
