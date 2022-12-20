import React from 'react'
import BasketItem from './BasketItem';
import moneyFormat from "../Helpers"

const Basket = ({
        basket,total,resetBasket
    }) => {
  return (
    <div className='basket-container container'>
        <h3>Alışveriş Detayları</h3>
    <ul>
        {
            basket.map((item, i) => < BasketItem key = {
                        i
                    }
                    item = {
                        item
                    }
                    />)}
    </ul>
    <div className='total'>
    Toplam: ${
        moneyFormat(total)
    }
</div>
<button className="basket-reset-btn" onClick={resetBasket} >Sepeti Sıfırla</button>
    </div>
  )
}

export default Basket