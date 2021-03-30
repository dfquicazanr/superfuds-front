import './shopping-cart.component.scss';
import backIcon from 'assets/chevron-left-solid.svg';
import {useContext} from "react";
import GlobalState from "global-state/state";
import {ProductItemCart} from "../product-item-cart/product-item-cart.component";

export const ShoppingCart = () => {
  const { state, closeShoppingCart } = useContext(GlobalState);

  return (
    <div className={'shopping-cart'}>
      <div className={'shopping-cart__container'}>
        <button onClick={() => closeShoppingCart()} className={'shopping-cart__container__back-button'}>
          <img className={'shopping-cart__container__back-button__image'} src={backIcon} alt={'back'}/> Volver a la tienda
        </button>
        <h1 className={'shopping-cart__container__title'}>
          Carrito de compras
          <span className={'shopping-cart__container__title__total-items'}><span className={'shopping-cart__container__title__total-items__value'}>{Object.keys(state.cart).length}</span> items</span>
        </h1>
        <div className={'shopping-cart__container__titles'}><h4>Item</h4><h4>Cantidad</h4><h4>Precio</h4></div>
        <div className={'shopping-cart__container__products'}>
          {
            Object.keys(state.cart)
              .map((key, index) => {
                const product = state.cart[key];
                return ProductItemCart({product, index})
              })
          }
        </div>
      </div>
    </div>
  )
}
