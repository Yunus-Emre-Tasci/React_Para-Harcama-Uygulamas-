import React from 'react'

const Product = ({
        product,
        basket,
        setBasket
    }) => {

const addBasket=()=>{
    setBasket([...basket,product])
}

  return (
    <div className="product">
        <h6> {product.title} </h6>
        <div className="price"> ${product.price} </div>
        <div className="actions">
            <button>SAT</button>
            <span className="amount">0</span>
            <button onClick={addBasket} >SATIN AL</button>
        </div>
        <style jsx>
          {`
          .product{
            padding:10px;
            background:#fff;
            border:1px solid #ddd;
            margin-bottom:20px
          }
          `}
        </style>
    </div>
  )
}

export default Product