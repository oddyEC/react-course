import { useState, React } from "react";

function EjercicioHookColores(props) {
  const [color, setColor] = useState("blue");
  const [valorParrafo, setParrafo] = useState(0);
  const colorsList = ["red", "yellow", "blue", "green"];
  return (
    <div>
      <h1 style={{ backgroundColor: color }}>Azul Valor Parrafo : {valorParrafo}</h1>
      
      <div>
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor(colorsList[1])}
        >
          amarillo
        </button>
        <button
          style={{ backgroundColor: colorsList[0] }}
          onClick={() => setColor(colorsList[0])}
        >
          rojo
        </button>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => setColor(colorsList[3])}
        >
          verde
        </button>
      </div>
    </div>
  );
}

export default EjercicioHookColores;
