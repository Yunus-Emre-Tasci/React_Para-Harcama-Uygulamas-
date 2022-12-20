import React from 'react'; 
import products from "./products.json"

const BasketItem = ({
        item
    }) => {

    const product=products.find(i=>i.id===item.id)   
  return (
    <div>
        {product.title} x {item.amount}
    </div>
  )
}

export default BasketItem