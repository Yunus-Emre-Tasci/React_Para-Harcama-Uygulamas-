import React from 'react';

const Header = ({
        money, total
    }) => {
  return (
    <div>
         {total>0&& money-total!==0&&
         <>
          Harcamak için ${
              money-total
          }
          paranız
          kaldı!
         </>
         }
         {total===0&& 
         <>
         Harcamak için ${
             money
         }
         paranız
         var!
         </>
         }
         {
            money-total===0&&
            <div>
            Paran bitti, lütfen biraz tasarruf yap!
            </div>
         }

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
    </div>
  )
}

export default Header