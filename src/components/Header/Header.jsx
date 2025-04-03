import "./Header.css";
import Titulo from "/Titulo.png"

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
