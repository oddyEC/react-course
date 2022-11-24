import { useState } from 'react';

const productoDatos = [
    { id: 1, nombre: "Producto 1", precio: 200.0 },
    { id: 2, nombre: "Producto 2", precio: 130.30 },
    { id: 3, nombre: "Producto 3", precio: 20 },
];


function ProductoLista() {

    const [productosSeleccionados, setProductosSeleccionados] = useState([]);



    const handlerSeleccion = (producto) => {
        var itemCarrito = {
            producto: producto,
            cantidad: 1
        }

        // var listaProducto = productosSeleccionados.filter((carrito)=>(carrito.producto === producto));
        var listaProducto = productosSeleccionados.filter((carrito) => (carrito.producto.id === producto.id));

        if (listaProducto.length === 0) {
            setProductosSeleccionados((listaActual) => {
                const listaNueva = [...listaActual];
                listaNueva.push(itemCarrito)
                return listaNueva;
            });
        } else {

            // estado asincorono REACT
            
            // setProductosSeleccionados((listaActual) => {
            //     const listaNueva = [...listaActual];
            //     var objetoItemCarritoAnterior = listaNueva.filter((itemCarritoAnterior)=>(itemCarritoAnterior.producto.id === producto.id));
            //     console.log("es el");
            //     console.log(objetoItemCarritoAnterior);
            //     objetoItemCarritoAnterior[0].cantidad += 1 ;
            //     return listaNueva;
            // });
            // const listaNueva = productosSeleccionados.map((listaViejaItem) => {


            //     if (listaViejaItem.producto.id === producto.id) {
            //         var itemNuevo = {
            //             producto: listaViejaItem.producto,
            //             cantidad: listaViejaItem.cantidad + 1
            //         }
            //         return itemNuevo;
            //     } else return listaViejaItem;
            // })
            


            const listaNueva = productosSeleccionados.map((listaViejaItem) => listaViejaItem.producto.id === producto.id? {

                ...listaViejaItem, cantidad:listaViejaItem.cantidad+1}:listaViejaItem);

            setProductosSeleccionados(listaNueva);
        }
    }

    const listaProductosDisponibles = productoDatos.map((producto) => <ProductoSeleccion
        key={producto.id}
        producto={producto}
        funcionProductoSeleccionado={handlerSeleccion}
    />);

    //

    const listProductosSeleccionados = productosSeleccionados.map(
        (itemCarrito) => <li key={itemCarrito.producto.id}>Nombre:{itemCarrito.producto.nombre}, Precio:{itemCarrito.producto.precio}, Cantidad:{itemCarrito.cantidad}</li>
    );

    return <>
        <h3>Lista de productos seleccionados</h3>
        <ul>{listProductosSeleccionados}</ul>

        <h3>Lista de productos disponibles</h3>
        {listaProductosDisponibles}
    </>
}

function ProductoSeleccion({ producto, funcionProductoSeleccionado }) {
    return <div>
        Nombre: {producto.nombre} Precio: {producto.precio}
        <button onClick={(e) => funcionProductoSeleccionado(producto)} >Seleccionar</button>
    </div>
}

export default ProductoLista;