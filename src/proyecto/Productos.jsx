
import {useState} from 'react';

const productoDatos = [
    {id:1,nombre:"Producto 1",precio:200.0},
    {id:2,nombre:"Producto 2",precio:130.30},
    {id:3,nombre:"Producto 3",precio:20},
];

function ProductoLista(){
    
    const [productosSeleccionados,setProductosSeleccionados] = useState([]);

    const handlerSeleccion=(producto)=>{
        console.log(producto);
        //setProductosSeleccionados((listaActual)=>listaActual.push(producto));

       /*  const listaNueva = [...productosSeleccionados];
        listaNueva.push(producto);
        console.log(listaNueva);
        setProductosSeleccionados(listaNueva); */
        setProductosSeleccionados((listaActual)=>{
            const listaNueva = [...listaActual];
            listaNueva.push(producto)
            return listaNueva;
        });
    }

    const listaProductosDisponibles = productoDatos.map((producto) => <ProductoSeleccion 
        key={producto.id}
        producto={producto}
        funcionProductoSeleccionado={handlerSeleccion}    
    />);

    console.log(productosSeleccionados);

    const listProductosSeleccionados = productosSeleccionados.map(
            (producto) => <li key={producto.id}>{producto.nombre}</li>
    );

    return <>
        <h3>Lista de productos seleccionados</h3>
         <ul>{listProductosSeleccionados}</ul>

        <h3>Lista de productos disponibles</h3>
        {listaProductosDisponibles}
    </>
}

function ProductoSeleccion({producto,funcionProductoSeleccionado}){
    return <div>
        Nombre: {producto.nombre} Precio: {producto.precio} 
        <button onClick={(e)=>funcionProductoSeleccionado(producto)} >Seleccionar</button>
    </div>
}

export default ProductoLista;