import { useState, React, useEffect } from "react";

const UsarHookeEffectCliente = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() =>
    setClientes([
      { codigo: "1", nombre: "Diego", activo: true },
      { codigo: "2", nombre: "Dany", activo: false },
      
    ])
  );
};

export default UsarHookeEffectCliente;
