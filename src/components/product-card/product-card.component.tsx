import './product-card.component.scss';
import {formatPrice} from "utils/text-utils";
import {useContext} from "react";
import GlobalState from "global-state/state";

export const ProductCard = (props: any) => {
  const { addProductToCart } = useContext(GlobalState);
  const {product, key} = props;

  return (
    <div
      className={'product-card'} key={key}>
      <div className={'product-card__container'}>
        <img className={'product-card__container__image'} src={product.thumbnail} alt={'product'}/>
        <hr className={'product-card__container__separator'}/>
        <h3 className={'product-card__container__subtitle'}>{product.supplier} <span className={'product-card__container__subtitle__content'}>{product.net_content}</span></h3>
        <h2 className={'product-card__container__title'}>{product.title}</h2>
        <h4 className={'product-card__container__price'}>
          <span className={'product-card__container__price__symbol'}>$</span>
          {formatPrice(product.price_real)}
          <span className={'product-card__container__price__units'}> x {product.units_sf} unids</span>
        </h4>
      </div>
      <button onClick={() => addProductToCart(product)} className={'product-card__add-to-cart'}>Agregar al carrito</button>
    </div>
  );
}