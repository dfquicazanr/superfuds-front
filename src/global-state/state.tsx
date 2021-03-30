import React, { useState, createContext } from 'react';
import {Product} from "models/product";

const stateObj: { cart: { [id: string]: Product}, shoppingCartOpened: boolean } = {
  cart: {},
  shoppingCartOpened: false
};

const GlobalState = createContext(
  {
    state: stateObj,
    openShoppingCart: () => {},
    closeShoppingCart: () => {},
    addProductToCart: (product: Product) => {},
    removeProductFromCart: (product: Product) => {},
    increaseProductQuantity: (product: Product) => {},
    decreaseProductQuantity: (product: Product) => {}
  }
);

export const ContextProvider = (props: any) => {
  const { children } = props;
  const [ state, setState ] = useState(stateObj);

  const addProductToCart = (product: Product) => {
    setState({
      ...state,
      cart: {...state.cart, [product.id]: {...product, quantity: 1}},
    });
  }

  const removeProductFromCart = (product: Product) => {
    const {[product.id]: deleted, ...newCart} = state.cart;
    setState({
      ...state,
      cart: {...newCart}
    });
  }

  const openShoppingCart = () => {
    setState({
      ...state,
      shoppingCartOpened: true
    });
  }

  const closeShoppingCart = () => {
    setState({
      ...state,
      shoppingCartOpened: false
    });
  }

  const increaseProductQuantity = (product: Product) => {
    const currentProduct = state.cart[product.id];
    setState({
      ...state,
      cart: {...state.cart, [product.id]: {...currentProduct, quantity: (currentProduct.quantity || 0) + 1}}
    });
  }

  const decreaseProductQuantity = (product: Product) => {
    const currentProduct = state.cart[product.id];
    setState({
      ...state,
      cart: {...state.cart, [product.id]: {...currentProduct, quantity: (currentProduct.quantity || 0) - 1}}
    });
  }

  return (
    <GlobalState.Provider value={{state, openShoppingCart, closeShoppingCart, addProductToCart, removeProductFromCart, increaseProductQuantity, decreaseProductQuantity}}>
      { children }
    </GlobalState.Provider>
  );
};

export default GlobalState;