import React from "react";

class RelojComponent extends React.Component {
  state = { horas:(new Date()).getHours(),minutos:(new Date()).getMinutes(),segundos:(new Date()).getSeconds() };

  

  render() {
    
    return (
      <> 
        <div>
            <h1>Hora</h1>
            <h2>{this.state.horas<10?"0":""}{this.state.horas}:{this.state.minutos<10?"0":""}{this.state.minutos}:{this.state.segundos<10?"0":""}{this.state.segundos}</h2>
        </div>
      </>
    );
  }

  componentDidMount() {
    console.log("ProductoTipoClass.componentDidMount");
    //Cambiar el estado, cada segundo
    this.timerID = setInterval(
      () => {
        var today=new Date();
        this.setState({ horas:today.getHours() })
        this.setState({ minutos:today.getMinutes() })
        this.setState({ segundos:today.getSeconds() })
      }
      ,
      100 //milisegundos => 1 segundo
    );
  }

  componentDidUpdate() {
    console.log("ProductoTipoClass.componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ProductoTipoClass.componentWillUnmount");
  }
}

export default RelojComponent;