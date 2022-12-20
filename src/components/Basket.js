import React from 'react'
import BasketItem from './BasketItem'

const Basket = ({
        basket,total
    }) => {
  return (
    <>
    {basket.map((item,i)=> <BasketItem key={i} item={item} />)}
    <div>
    Toplam: ${
        total
    }
</div>
    </>
  )
}

export default Basket