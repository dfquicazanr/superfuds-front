import React, {useContext, useEffect, useState} from 'react';
import './App.scss';
import {Header} from "./components/header/header.component";
import {listProducts} from "./services/products.service";
import {ProductCard} from "./components/product-card/product-card.component";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {ShoppingCart} from "./components/shopping-cart/shopping-cart.component";
import GlobalState from "./global-state/state";


function App() {
  const { state } = useContext(GlobalState);
  const [products, setProducts] = useState([]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const getProducts = () => {
    listProducts().then(productsResult => setProducts(productsResult.data));
  }

  useEffect(() => {
    getProducts();
  });

  return (
    <div className="App">
      <Header/>
      <div className={'App__carousel'}>
        <h1 className={'App__carousel__title'}>Nuevo en SuperFuds <button className={'App__carousel__title__show-more'}>Ver más</button></h1>
        <div className={'App__carousel__products'}>
          <Carousel className={'App__carousel__products__carousel'} responsive={responsive}>
            {products.map((product, key) => ProductCard({product, key}))}
          </Carousel>
        </div>
      </div>
      {state.shoppingCartOpened ? <ShoppingCart/> : null}
    </div>
  );
}

export default App;
