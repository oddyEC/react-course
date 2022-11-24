import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "setBlue":
      return  "#0000FF";
    case "setRed":
        return  "#FF0000";
    case "setGreen":
        return  "#00FF00";
    case "setYellow":
        return  "#d5d013";
    case "setOrange":
        return  "#e74f2c";
    default:
      throw new Error();
  }
}

const UserReducerComponent = () => {

  const [valorColor, dispatch] = useReducer(reducer, "#0000FF");

  return (
    <>
      <div>
      <div style={{"backgroundColor":valorColor}}>
        <p style={{"color":"#FFF"}}>Cuadro</p>
      </div>
      <button onClick={() => dispatch({type: "setRed"})} style={{"backgroundColor":"Red"}}>Rojo</button>
      <button onClick={() => dispatch({type: "setGreen"})} style={{"backgroundColor":"Green"}}>Verde</button>
      <button onClick={() => dispatch({type: "setBlue"})} style={{"backgroundColor":"Blue"}}>Azul</button>
      <button onClick={() => dispatch({type: "setYellow"})} style={{"backgroundColor":"#d5d013"}}>Amarillo</button>
      <button onClick={() => dispatch({type: "setOrange"})} style={{"backgroundColor":"#e74f2c"}}>Naranja</button>
      </div>
    </>
  );
};

export default UserReducerComponent;