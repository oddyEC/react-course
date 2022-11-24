import { useReducer, useState } from "react";

//1. Paso. crear funcion reducer. 
//Estado, 
//objeto. action {type, ...otros-datos }
function reducer(state, action) {
  switch (action.type) {
    case "+":
      return  state + 1 ;
    case "-":
      return state - 1;
    case "reset":
      return 0 ;
    case "mutiplicar10":
        return state * 10;
    case "mutiplicar20":
          return state * 20;
    case "mutiplicar30":
            return state * 30;
    default:
      throw new Error();
  }
}

//2. Crear la inicializacion
const estadoInicial = 0;

const AumentarDisminuirReducer = () => {

  //3. Utilizar el hook useReducer...
  //[estado,dispatch]
  const [valorActual, dispatch] = useReducer(reducer, estadoInicial);

  //4. Utilizar dispatch, con las acciones que requiero
  return (
    <>
      <div>
        <button onClick={() => dispatch({type: '+'})}>+</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <button onClick={() => dispatch({type: '-'})}>-</button>
        <button onClick={() => dispatch({type: 'mutiplicar10'})}>*10</button>
        <button onClick={() => dispatch({type: 'mutiplicar20'})}>*20</button>
        <button onClick={() => dispatch({type: 'mutiplicar30'})}>*30</button>
      </div>

      <div>Valor Actual: {valorActual}</div>
    </>
  );
};

export default AumentarDisminuirReducer;