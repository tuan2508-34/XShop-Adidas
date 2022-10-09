import Data from "../data"
import { useContext } from "react"
import { AppContext } from "../context"
import { useParams } from 'react-router-dom'
import {HiOutlineSortAscending,HiOutlineSortDescending} from 'react-icons/hi';
function SortPrice(){
  const{changeView}=useContext(AppContext)
  const {type} = useParams()
  let number
  if(type==="male"){
       number=0;
  }
  else if(type==="female"){
      number=1;
 }
  else if(type==="children"){
      number=2;
 }
  else if(type==="sport"){
      number=3;
 }
  let datas=Data[number].private
  const getPrice=datas.map((items)=>items.price)
  const Prices=[...new Set(getPrice.flat(1))]
  const Sort=Prices.sort(function(a, b){return a - b});
 
  const Up=()=>{
          let gui=[]
          let arr=[]
          for(let i=0;i<Sort.length;i++){
              let la=Sort[i]
              gui=gui.concat(datas.filter((i)=>i.price===la))
           }
           gui.map((item)=>{
            let value={
                 name:item.name,
                 price:item.price,
                 image:item.info[0].image,
                 id:item.id
            }
            arr=arr.concat(value)
          }
          )
        changeView(arr)

      }

  const Down=()=>{
          let gui=[] 
          let arr=[]
          for(let i=Sort.length;i>0;i--){
              let la=Sort[i]
              gui=gui.concat(datas.filter((i)=>i.price===la))
           }
           gui.map((item)=>{
            let value={
                 name:item.name,
                 price:item.price,
                 image:item.info[0].image,
                 id:item.id
            }
            arr=arr.concat(value)
          }
          )
        changeView(arr)
      }
return(
 <>
 <ul>
 <li className="p-2 hove"><div onClick={Up}>Giá tăng dần <HiOutlineSortAscending/></div></li>
 
 <li className="p-2 hove"><div onClick={Down}>Giá giảm dần <HiOutlineSortDescending/></div></li>
 
</ul>
  
  
 </>
  
)
}
export default SortPrice;