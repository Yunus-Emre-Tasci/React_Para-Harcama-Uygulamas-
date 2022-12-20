import "./App.css";
import Header from "./components/Header";
import { useState,useEffect } from "react";
import products from "./components/products.json";
import Product from "./components/Product";


const App=()=>{
const [money, setMoney] = useState(100)
const [basket, setBasket] = useState([])
const [total, setTotal] = useState(0)

useEffect(()=>{
   setTotal(basket.reduce((acc, item) => {
     return acc + (item.amount * (products.find(product => product.id === item.id)).price)
   }, 0))
   console.log(basket);
   console.log(total);
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








