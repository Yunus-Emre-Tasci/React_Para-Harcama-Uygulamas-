import "./App.css";
import Header from "./components/Header";
import { useState,useEffect } from "react";
import products from "./components/products.json";
import Product from "./components/Product";
import Basket from "./components/Basket";


const App=()=>{
const [money, setMoney] = useState(128000000)
const [basket, setBasket] = useState([])
const [total, setTotal] = useState(0)

const resetBasket=()=>{
  setBasket([])
}

useEffect(()=>{
   setTotal(basket.reduce((acc, item) => {
     return acc + (item.amount * (products.find(product => product.id === item.id)).price)
   }, 0))
   console.log(basket);
   console.log(total);
}, [basket])

  return(
    <div>
      < Header total={total} money = {
        money
      }
      />
      <div className="container products">
        {
          products.map((product, i) => < Product basket = {
              basket
            }
            setBasket = {
              setBasket
            }
            key = {
              i
            }
            product = {
              product
            }
            total = {
              total
            }
            money = {
              money
            }
            />)
          }
      </div>
      {total>0 && (
        <>
        <Basket basket={basket} total={total} />
<button onClick={resetBasket} >Sepeti Sıfırla</button>
 </>
      )
      }
    </div>
  )
}

export default App;








