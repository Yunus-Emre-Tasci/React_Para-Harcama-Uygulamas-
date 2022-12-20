import React from 'react'
import BasketItem from './BasketItem';
import moneyFormat from "../Helpers"

const Basket = ({
        basket,total
    }) => {
  return (
    <>
    {basket.map((item,i)=> <BasketItem key={i} item={item} />)}
    <div>
    Toplam: ${
        moneyFormat(total)
    }
</div>
    </>
  )
}

export default Basket