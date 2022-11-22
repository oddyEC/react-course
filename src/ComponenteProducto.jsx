import React from "react";

class ProductoEventos extends React.Component {
    state={
        iva:"12",
        activo:true,
        descuento:"15%"
    }
    render(){
        const contenido =(<div>
            <div>
                <p>{this.props.Nombre}</p>
                <p>{this.props.Precio}</p>
            </div>
            <div>
                <p>{this.state.iva}</p>
                <p>{this.state.activo.toString()}</p>
                <p>{this.state.descuento}</p>
            </div>
        </div>);
        
    
    return (<>{contenido}</>);
}


componentDidMount() {
    console.log("ProductoEventos.componentDidMount");
    // this.timerID = setInterval(
    //     () => this.setState({
    //         iva:"14",
    //         activo:false,
    //         descuento:"25%"
    //     }),
    //     10000 //milisegundos => 1 segundo
    //   );
  }

  componentDidUpdate() {
    console.log("ProductoEventos.componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ProductoEventos.componentWillUnmount");
  }


}

export default ProductoEventos;