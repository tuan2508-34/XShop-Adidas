function money(price){
    let num =price.price
    let price_millions=Math.floor((num)/1000000)
    let thousand=((num)-price_millions*1000000)/100000
    let price_thousand=Math.floor(thousand)
    return(
        <div>{price_millions}.{price_thousand}00.000 ₫</div>
    )
  }
export default money;