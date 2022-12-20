import "./App.css";
import Header from "./components/Header";
import { useState,useEffect } from "react";
import products from "./components/products.json";
import Product from "./components/Product";


const App=()=>{
const [money, setMoney] = useState(100)
const [basket, setBasket] = useState([])

useEffect(()=>{
   console.log(basket);
}, [basket])

  return(
    <div>
      < Header money = {
        money
      }
      />
      {
        products.map((product,i)=> <Product basket={basket} setBasket={setBasket} key={i} product={product} />)
      }
    </div>
  )
}

export default App;








