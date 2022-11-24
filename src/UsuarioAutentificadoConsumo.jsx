import { useContext } from "react";
import UsuarioContext from "./contexto/UsuarioContext";

function UsuarioAutentificado() {
  const usuario = useContext(UsuarioContext);
  let result = usuario.autentificado ? (
    <div>Hola {usuario.nombre}</div>
  ) : (
    <button>Iniciar Sesion</button>
  );
  return <>{result}</>;
}

export default UsuarioAutentificado;
