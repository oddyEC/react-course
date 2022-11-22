import { useState } from "react";



function UsarHookEstado(props) {

  const [valor, setValor] = useState(0);

  return (

    <>

      <div>Valor Estado: {valor}</div>

      <button onClick={() => setValor(Math.floor(Math.random() * 25))}>

        Actualizar

      </button>

    </>

  );

}

export default UsarHookEstado;