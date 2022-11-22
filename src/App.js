import logo from './logo.svg';
import './App.css';
import ClienteComponent from './ClienteComponent';
import ProductoTipoClass from './ProductoTipoClass';
import ComponenteProducto from './ComponenteProducto';
import RelojComponent from './RelojComponent';
import HoraFechaComponent from './HoraFechaComponent';
import CoordinadorComponent from './CoordinadorComponent';
import Example from './Hook';
import UsarHookEstado from './Hook';
import EjercicioHookColores from './HookExercise';
import EjercicioUseEffect from './HookEffect copy';

const BotonPersonalizado = ({tipo,text,...otros})=>
{
  const colores={
    "primary":"#007bff",
    "secondary":"#6c757d",
    "success":"#28a745",
    "danger":"#dc3545",
    "waring":"#ffc107",
    "info":"#17a2b8",
    "light":"#f8f9fa",
    "dark":"#343a40"
  }
  let estiloBoton={"backgroundColor":colores[tipo]}
  
  return <button {...otros} style={{...estiloBoton}}>{text}</button>
  
}


const Campo=({...propiedades})=>
{
  return <input {...propiedades}/>
}

function App() {
  let direccionJuan={
    callePrincipal:"Jose E",
    calleSecundaria:"Baltazar C"
  }
  let direccionDavid={
    callePrincipal:"Av. 10 de Agosto",
    calleSecundaria:"Colón"
  }
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      {/* <BotonPersonalizado tipo="primary" text="Guardar" id="btnGuardar" type="submit"/><br />
      <BotonPersonalizado tipo="secondary" text="Cancelar" id="btnCancelar" type="reset"/><br />
      <Campo type="text"/><br />
      <Campo type="number"/><br />
      <Campo type="date"/><br />
      <ClienteComponent nombre="Danilo" apellido="Pilacuan" direccion="cdp" numero="danilo.pilacuan@gmail.com"/> 
      <ClienteComponent nombre="Juan" apellido="Cevallos" direccion={direccionJuan} numero="0987171309"/>
      <ClienteComponent nombre="David" apellido="Molina" direccion={direccionDavid} numero="0987171309-2"/>
      <ClienteComponent nombre={3} apellido="Molina" direccion={direccionDavid} numero="0987171309-2"/> */}
      {/* <ProductoTipoClass categoria="uno" tipo="tipo2" activo="true"/> */}
      {/* <ComponenteProducto Nombre="galletas" Precio="5"/> */}
      {/* <RelojComponent/>  */}
      {/* <HoraFechaComponent/> */}
      {/* <CoordinadorComponent/> */}
      <EjercicioUseEffect></EjercicioUseEffect>
    </div>
  );
}

export default App;
