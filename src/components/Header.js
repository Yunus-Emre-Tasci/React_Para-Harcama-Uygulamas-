import React from 'react';
import { Container } from 'react-bootstrap';
import moneyFormat from "../Helpers"

const Header = ({
        money, total
    }) => {
  return (
    <Container>
         {total>0&& money-total!==0&&
         <div div className = 'header' >
          Harcamak için <span>${
              moneyFormat(money - total)
          }</span> paranız
          kaldı!
         </div>
         }
         {total===0&& 
         <div div className = 'header' >
         Harcamak için  <span>${
             moneyFormat(money)
         }</span>  paranız
         var!
         </div>
         }
         {
            money-total===0&&
            <div div className = 'header' >
            Paran bitti, lütfen biraz tasarruf yap!
            </div>
         }

         <style jsx>{
            `
            .header{
                position:sticky;
                top:0;
                background:linear-gradient(to bottom,green,greenyellow);
                height:60px;
                display:flex;
                align-items:center;
                justify-content:center;
                color:white;
                font-size:24px;
                letter-spacing:1px
            }
            .header span{
                margin:0 10px;
                font-weight:bold;
            }
            `
         }

         </style>

        {/* {
            total>0?(
                <div>
                    Harcamak için $ {
                        money - total
                    }
                    paranız
                    var
                </div>
            ):(
                <div>
                    Harcamak için ${money} paranız var
                </div>
            )
        } */}
    </Container>
  )
}

export default Header