import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        setContador(contador - 1);
    };

    const reiniciar = () => {
        setContador(0);
    };

    return (
        <div>
            <h2>Contador: {contador}</h2>

            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
            <button onClick={reiniciar}>Reset</button>
        </div>
    );
}

export default Contador;