import Data from "../data"
import { useContext } from "react"
import { AppContext } from "../context"
import { useParams, Link } from 'react-router-dom'
import {FaSortAlphaDown,FaSortAlphaUpAlt} from 'react-icons/fa';
function SortName(){
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
  let getName=datas.map((items)=>items.name)
  const Names=[...new Set(getName.flat(1))]
  const Sort=Names.sort()
  const up=()=>{
          let arr=[]
          let gui=[]
          for(let i=0;i<Sort.length;i++){
              let la=Sort[i]
              gui=gui.concat(datas.filter((i)=>i.name===la))
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

  const down=()=>{
          let arr=[]
          let gui=[]
          for(let i=Sort.length;i>0;i--){
              let la=Sort[i]
              gui=gui.concat(datas.filter((i)=>i.name===la))
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
return(
 <>
   <ul className="">
 <li className="p-2 hove"><div onClick={up}>Tên từ trên xuống <FaSortAlphaDown/></div></li>

 <li className="p-2 hove"><div onClick={down}>Tên từ dưới lên <FaSortAlphaUpAlt/></div></li>
</ul>
 </>
  
)
}
export default SortName;