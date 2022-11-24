import { useReducer, useState } from "react";
import CartReducer from "./Cart/CartReducer";
import { products as productList } from "./Data";
import { Product } from "./Product";

const initialCart = [];
function Dashboard (){
    const [cart, dispatchCart] = useReducer(CartReducer, initialCart);
    const products = productList;
    return(
        <div> 
            {/* Lista de seleccionados */}
            <ul className="cart-container">
                {cart.map(cartItem => <li key={cartItem.product.id}>{cartItem.product.title} Cant: {cartItem.cant}</li>)}
            </ul>
            <button>Procesar</button>

            {/* Lista de productos disponibles */}
            <div>
                {products.map(
                    product => 
                        <Product 
                            key={product.id}
                            onAdd={() => dispatchCart({type: "addProduct", product: product})} 
                            title={product.title} 
                            description={product.description} 
                            price={product.price}
                        />
                    )}
            </div>

        </div>
    );
} 

export default Dashboard;