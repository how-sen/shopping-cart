import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let AlreadyInCart = false;
  cartItems.forEach(item => {
    if (item.id === product.id) {
      AlreadyInCart = true;
      item.count++;
    }
  });
  if(!AlreadyInCart){
    cartItems.push({...product, count: 1});
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return dispatch({
    type: ADD_TO_CART,
    payload: {cartItems: cartItems}
  })
}

export const removeFromCart = (items, product) => (dispatch) =>{
  const cartItems = items.slice().filter(element => element.id !== product.id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return dispatch({
      type: REMOVE_FROM_CART,
      payload: {cartItems: cartItems}
    })
}