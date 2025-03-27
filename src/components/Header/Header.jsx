import "./Header.css";
import Titulo from "../../../public/Titulo.png"

function Header() {
  return (
    <>
      <header>       
          <img src={Titulo} alt="" className="Logo"/>
      </header>
   </>
  );
}

export default Header;
