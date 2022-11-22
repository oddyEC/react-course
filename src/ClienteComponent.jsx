import PropTypes from "prop-types";

function ClienteComponent({nombre,apellido,direccion,numero})
{
  return <div style={{border:"1px solid black"}}>
        <h3>Nombre: {nombre}</h3>
        <h3>Apellido: {apellido}</h3>
        {direccion.callePrincipal && <h3>Dirección:</h3>}
        <h3>{direccion.callePrincipal?"Calle Principal: "+direccion.callePrincipal:"Dirección: "+direccion}</h3>
        {direccion.calleSecundaria && <h3>Calle Secundaria {direccion.calleSecundaria}</h3>}
        <h3>Teléfono: {numero}</h3>
  </div>
}

ClienteComponent.propTypes={
  nombre:PropTypes.string,
  apellido:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  direccion:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
        callePrincipal:PropTypes.string,
        calleSecundaria:PropTypes.string
      }),
  ]),
  numero:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

export default ClienteComponent