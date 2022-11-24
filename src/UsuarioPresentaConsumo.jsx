import { useContext } from "react";
import UsuarioContext from "./contexto/UsuarioContext";

function UsuarioPresentaConsumo(){
    const usuario = useContext(UsuarioContext);
    return (
        <div>
            <h3>Presentar Informacion Usuario</h3>
            <b>Codigo:</b> {usuario.codigo}. <b>Nombre:</b> {usuario.nombre}
        </div>
    );
}

export default UsuarioPresentaConsumo;