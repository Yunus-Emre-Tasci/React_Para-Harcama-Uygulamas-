import React from 'react';
import moneyFormat from "../Helpers"


const Product = ({
        product,
        basket,
        setBasket,
        money,
        total
    }) => {

const basketItem = basket.find(item => item.id === product.id)

const addBasket=()=>{
    const checkBasket=basket.find(item=>item.id===product.id)
    if (checkBasket){
        checkBasket.amount+=1
        setBasket([...basket.filter(item=>item.id !== product.id),checkBasket])
    }else{
        setBasket([...basket,{
            id:product.id,
            amount:1
        }])
    }
}

const removeBasket=()=> {
    const currentBasket = basket.find(item => item.id === product.id)
    const basketWithoutCurrent=basket.filter(item=>item.id!==product.id)
    currentBasket.amount -= 1
    if (currentBasket.amount === 0) {
         setBasket([...basketWithoutCurrent])
    }else{
        setBasket([...basketWithoutCurrent, currentBasket])
    }
}

  return (
    <div className="product">
        <img src={product.image} alt="" />
        <h6> {product.title} </h6>
        <div className="price"> ${moneyFormat(product.price)} </div>
        <div className="actions">
            <button className='sell-btn' disabled={!basketItem} onClick={removeBasket}>SAT</button>
            < span className = "amount" > {
                basketItem && basketItem.amount || 0
            } </span>
            <button className='buy-btn' disabled={
             total+product.price>money
            } onClick={addBasket} >SATIN AL</button>
        </div>
        <style jsx>
          {`
          .product{
            padding:15px;
            background:#fff;
            border:1px solid #ddd;
            margin-bottom:20px;
            width:24%;
          }
          .product img{
            width:100%;
          }
          .product h6{
            font-size:20px;
            margin-bottom:10px;
          }
          .product .price{
            font-size:20px;
            color:#179b17
          }
          .products .actions{
            display:flex;
            align-items:center;
            margin-top:15px;
          }
          `}
        </style>
    </div>
  )
}

export default Product