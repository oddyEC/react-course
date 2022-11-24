function CartReducer (state, action) {
    switch (action.type) {
        case "addProduct":
            var product = action.product;
            var filtered = state.filter(i => i.product === product);
            if (filtered.length === 0) {
                var cartItem = {
                    product: product,
                    cant: 1
                };
                return [...state, cartItem]
            }else{
                var newState = state.map(cartItem => cartItem.product.id === product.id ?
                    ({...cartItem, cant: cartItem.cant + 1}) : (cartItem)    
                );
                return newState;
            }
        default:
            break;
    }
}
export default CartReducer;