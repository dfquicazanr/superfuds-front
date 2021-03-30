import './product-item-cart.component.scss';
import plusIcon from 'assets/plus-solid.svg';
import minusIcon from 'assets/minus-solid.svg';
import minusDisabledIcon from 'assets/minus-solid-disabled.svg';
import trashIcon from 'assets/trash-alt-regular.svg';
import {formatPrice} from "utils/text-utils";
import {useContext} from "react";
import GlobalState from "global-state/state";

export const ProductItemCart = (props: any) => {
  const { increaseProductQuantity, decreaseProductQuantity, removeProductFromCart } = useContext(GlobalState);
  const {product, key} = props;

  return (
    <div
      className={'product-item-cart'} key={key}>
      <div className={'product-item-cart__details'}>
        <img className={'product-item-cart__details__image'} src={product.thumbnail} alt={'product'}/>
        <div className={'product-item-cart__details__text'}>
          <h2 className={'product-item-cart__details__text__title'}>{product.title}</h2>
          <h3 className={'product-item-cart__details__text__subtitle'}>x {product.units_sf} unids - {product.net_content} c/u</h3>
          <h4 className={'product-item-cart__details__text__brand'}>{product.supplier}</h4>
        </div>
      </div>
      <div className={'product-item-cart__quantity'}>
        <button onClick={() => {return product.quantity > 1 ? decreaseProductQuantity(product): {}}} disabled={product.quantity === 1}
                className={`product-item-cart__quantity__decrease ${product.quantity === 1 ? 'product-item-cart__quantity__decrease--disabled': ''}`}>
          <img src={product.quantity === 1 ? minusDisabledIcon : minusIcon} alt={'minus'}/>
        </button>
        <span className={'product-item-cart__quantity__value'}>{product.quantity}</span>
        <button onClick={() => increaseProductQuantity(product)} className={'product-item-cart__quantity__decrease'}>
          <img src={plusIcon} alt={'plus'}/>
        </button>
      </div>
      <h4 className={'product-item-cart__price'}>
        <span className={'product-item-cart__price__symbol'}>$</span>
        {formatPrice(product.price_real)}
      </h4>
      <button onClick={() => removeProductFromCart(product)} className={'product-item-cart__remove-from-cart'}>
        <img src={trashIcon} alt={'remove-product'}/>
      </button>
    </div>
  );
}