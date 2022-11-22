import { useState, React, useEffect } from "react";

const EjercicioUseEffect = () => {
  const [dato, setDato] = useState(0);
  useEffect(() =>
    setDato((valorActual) => valorActual+1)
  );

  return <div>Dato: {dato}</div>
};

export default EjercicioUseEffect;
