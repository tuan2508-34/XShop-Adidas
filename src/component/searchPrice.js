import Data from "../data"
import { useContext,useState } from "react"
import { AppContext } from "../context"
const SearchPrice=()=>{
    const{number,changeView}=useContext(AppContext)
    const [top,setTop]=useState(0)
    const [checkTop,setCheckTop]=useState(false)
    const [bot,setBot]=useState(0)
    const [checkBot,setCheckBot]=useState(false)
    let data=Data[number].private
    let gui=[]
    const getPrice=Data.map((data)=>data.private.map((items)=>items.price)) 
    const prices=[...new Set(getPrice.flat(1))]
    prices.sort();
    function handleSubmit(e) {
        e.preventDefault()
      }

      function subPriceUp(e){
        let topp=e.target.value
        setTop(topp)
        if(topp<=0){
          setCheckTop(false)
        }
        else
        setCheckTop(true)
      }
  
    function subPriceBot(e){
        let bott=e.target.value
        setBot(bott)
        if(bott<=0){
          setCheckBot(false)
        }
        else
        setCheckBot(true)
      }

    
    function Search(){
       
       if(checkBot===true&&checkTop===false){
         let arr=[]
        let a=prices.filter(function(price,index){
          return price>=bot;
          })
          if(a.length>0){
            for(let i=0;i<a.length;i++){
               let la=a[i]
               gui=gui.concat(data.filter((i)=>i.price===la))
            }
            gui.map((item)=>{
              let value={
                   name:item.name,
                   price:item.price,
                   image:item.info[0].image,
                   id:item.id
              }
              return(
               arr=arr.concat(value)
              )
          })
       changeView(arr)
          }
        else if(a.length===0){
          changeView(1)
        }
       }
       else if(checkBot===false&&checkTop===true){
        let arr=[]
       let a=prices.filter(function(price,index){
         return price<=top;
         })
         if(a.length>0){
           for(let i=0;i<a.length;i++){
              let la=a[i]
              gui=gui.concat(data.filter((i)=>i.price===la))
           }
           gui.map((item)=>{
             let value={
                  name:item.name,
                  price:item.price,
                  image:item.info[0].image,
                  id:item.id
             }
             return(
              arr=arr.concat(value)
             )
         })
      changeView(arr)
         }
       else if(a.length===0){
         changeView(1)
       }
      }
      else if(checkBot===true&&checkTop===true){
        let arr=[]
        let a=prices.filter(function(price,index){
          return price>=bot;
          })
        let b=a.filter(function(price,index){
          return price<=top;
          })
        if(b.length>0){
          for(let i=0;i<b.length;i++){
            let la=b[i]
            gui=gui.concat(data.filter((i)=>i.price===la))
         }
         gui.map((item)=>{
           let value={
                name:item.name,
                price:item.price,
                image:item.info[0].image,
                id:item.id
           }
           return(
            arr=arr.concat(value)
           )
       })
    changeView(arr)
       }
     else if(b.length===0){
       changeView(1)
        }
    }
    else if(checkBot===false&&checkTop===false){
      changeView(0)
  }
}
    return(
        <>
      <form onSubmit={handleSubmit}>
          <div className="my-3 border center"><span className="">Theo mức giá</span></div>
          <ul>
         <li className=""><span>Từ:</span></li>
          <li><input className="w-50"
          type="text"
          onChange={subPriceBot}
          />₫</li>
          <li className=""><span>Đến:</span></li>
          <li><input className="w-50"
          type="text"
          onChange={subPriceUp}
          />₫</li>
          </ul>
      </form>
      <div className="border w-80 center bg-dark my-3 white_text p-1" onClick={Search}>Áp dụng</div>
      </>

   )
}
 export default SearchPrice;