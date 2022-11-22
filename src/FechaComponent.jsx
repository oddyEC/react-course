import React from "react";

class FechaComponent extends React.Component {
  state = { dia:(new Date()).getDate(),mes:(new Date()).getMonth()+1,anio:(new Date()).getFullYear() };

  render() {
    
    return (
      <> 
        <div>
            <h1>Fecha</h1>
            <h2>{this.state.dia}/{this.state.mes}/{this.state.anio}</h2>
        </div>
      </>
    );
  }

  componentDidMount() {
    var today=new Date();
    
    console.log("ProductoTipoClass.componentDidMount");
    //Cambiar el estado, cada segundo
    this.timerID = setInterval(
      () => {
        this.setState({ dia:today.getDate() })
        this.setState({ mes:today.getMonth()+1 })
        this.setState({ anio:today.getFullYear() })
      }
      ,
      1000 //milisegundos => 1 segundo
    );
  }

  componentDidUpdate() {
    console.log("ProductoTipoClass.componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ProductoTipoClass.componentWillUnmount");
  }
}

export default FechaComponent;