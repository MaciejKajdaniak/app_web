import { useState } from 'react'
import './App.css'
import {products as initProducts} from "./data/products.js";
import ProductAddForm from "./components/ProductAddForm.jsx";
import ProductList from "./components/ProductList.jsx";
import Summary from "./components/Summary.jsx";
import 'bootstrap/dist/css/bootstrap-grid.min.css';

function App() {
  const [products, setProducts] = useState(initProducts);
  const [category, setCategory] = useState("Wszystkie");

  function changeCategory(e) {
      setCategory(e.target.value);
  }

  return (
      <>
          <h1>Magazyn produktów</h1>
          <ProductAddForm addProduct={setProducts} products={products}/>
          <label>Kategoria <select value={category} onChange={changeCategory}>
              <option value="Wszystkie" selected>Wszystkie</option>
              <option value="Elektronika">Elektronika</option>
              <option value="Meble">Meble</option>
              <option value="Akcesoria">Akcesoria</option>
          </select></label><br/>
          <ProductList products={products.filter(product =>{
              if(category === "Wszystkie") return true;
              return product.category === category;
          })}/>
          <Summary products={products}/>
      </>
  )
}

export default App
