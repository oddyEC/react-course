import { useState, React, useEffect } from "react";
function PutBasico() {
  const [color, setColor] = useState([]);
  const [estado, setEstado] = useState([]);
  const handler = (event) => {
    console.log(event);
    const data = {
      codigo: "123",
      nombre: "Luis",
      direccion: "Quito, 10 de agosto",
    };
    let requestOptions = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { foo: "bar" },
    };
    let getOptions = {
      method: "GET",
    };
    fetch("https://httpbin.org/", getOptions)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.status);
          setColor("green");
          setEstado(response.status);
        } else if (response.status === 404) {
          setColor("yellow");
          setEstado(response.status);
        } else if (response.status === 500) {
          setColor("red");
          setEstado(response.status);
        } else {
          setColor("gray");
          setEstado(response.status);
        }
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <button onClick={(e) => handler()}> Ejecutar GET </button>
      <p style={{ color: color }}>{estado} cuadro</p>
    </div>
  );
}
export default PutBasico;
