import React, {useEffect, useState} from 'react';
import './App.scss';
import {Header} from "./components/header/header.component";
import {listProducts} from "./services/products.service";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    listProducts().then(productsResult => setProducts(productsResult));
  }

  useEffect(() => {
    getProducts();
  })

  return (
    <div className="App">
      <Header/>
      {products}
    </div>
  );
}

export default App;
