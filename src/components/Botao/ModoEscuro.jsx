import { useState, useEffect } from "react";

function ModoEscuro() {
    const [btnAtivo, setBtnAtivo] = useState(true)

    useEffect(() => { }, [btnAtivo])

    return (
        <>
            <button onClick={setBtnAtivo(!btnAtivo)}>{btnAtivo ? "Modo Claro" : "Modo Escuro"}</button>
        </>
    );
}

export default ModoEscuro