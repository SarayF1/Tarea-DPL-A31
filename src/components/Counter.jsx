import { useState } from "react";
import "./Contador.css";

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
        <div className="contenedor">
            <div className="contador-box">
                <h2>Contador</h2>
                <p className="numero">{contador}</p>

                <div className="botones">
                    <button className="btn sumar" onClick={incrementar}>+</button>
                    <button className="btn restar" onClick={decrementar}>-</button>
                    <button className="btn reset" onClick={reiniciar}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Contador;