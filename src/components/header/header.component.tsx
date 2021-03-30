import './header.component.scss';
import downArrowIcon from 'assets/chevron-down-solid.svg';
import profileImage from 'assets/profile_image.jpg'
import textLogo from 'assets/text_logo.svg';
import searchIcon from 'assets/search-solid.svg';
import shoppingCartIcon from 'assets/shopping-cart-solid.svg';
import {useContext} from "react";
import GlobalState from "global-state/state";

export const Header = () => {
  const { openShoppingCart } = useContext(GlobalState);

  return (
    <div className={'header'}>
      <img className={'header__text-logo'} src={textLogo} alt={'superfuds'}/>
      <div className={'header__search'}>
        <input className={'header__search__input'} type={'text'} placeholder={'Busca marcas y productos...'}/>
        <button className={'header__search__button'}>
          <img className={'header__search__button__image'} src={searchIcon} alt={'search'}/>
        </button>
      </div>
      <button onClick={() => openShoppingCart()} className={'header__shopping-cart'}>
        <img className={'header__shopping-cart__image'} src={shoppingCartIcon} alt={'shopping-cart'}/>
      </button>
      <div className={'header__profile'}>
        <a className={'header__profile__name'}>Saiby Alimentos</a>
        <a className={'header__profile__dropdown'}>Mi perfil <img src={downArrowIcon} className={'header__profile__dropdown__image'} alt={'down'}/></a>
        <img className={'header__profile__image'} src={profileImage} alt={'profile'}/>
      </div>
    </div>
  )
}