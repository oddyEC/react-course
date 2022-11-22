import React from "react";

class ProductoEventos extends React.Component {
  render() {
    const contenido = (
      <div id="contendor">
        {this.props.categoria} <br />
        {this.props.tipo} <br />
        {this.props.descripcion} <br />
        {this.props.nombre} <br />
        {this.props.codigo} <br />
        {this.props.precio} <br />
        {this.props.activo}
      </div>
    );

    return (<>{contenido}</>);
  }

  componentDidMount() {
    console.log("ProductoEventos.componentDidMount");
  }

  componentDidUpdate() {
    console.log("ProductoEventos.componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ProductoEventos.componentWillUnmount");
  }
}

//Ciclo vida Componente React.
class ProductoTipoClass extends React.Component {
  state = { activo: true };

  render() {
    const contenido = <ProductoEventos {...this.props} />;

    return (
      <> 
        {this.state.activo == true ? (
          contenido
        ) : (
          <div>No existe contenido</div>
        )} 
      </>
    );
  }

  componentDidMount() {
    console.log("ProductoTipoClass.componentDidMount");
    //Cambiar el estado, cada segundo
    this.timerID = setInterval(
      () => this.setState({ activo: false }),
      6000 //milisegundos => 1 segundo
    );
  }

  componentDidUpdate() {
    console.log("ProductoTipoClass.componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ProductoTipoClass.componentWillUnmount");
  }
}

export default ProductoTipoClass;