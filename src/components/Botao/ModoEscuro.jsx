import { useState} from "react";

function ModoEscuro() {
    const [btnAtivo, setBtnAtivo] = useState(true)

    return (
        <>
            <button onClick={setBtnAtivo(!btnAtivo)}>{btnAtivo ? "Modo Claro" : "Modo Escuro"}</button>
        </>
    );
}

export default ModoEscuro