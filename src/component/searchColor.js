import Data from "../data"
import { useContext} from "react"     
import { AppContext } from "../context"
function SearchColor(){
    const{number,changeView,changeColor}=useContext(AppContext)
    let datas=Data[number].private
    let arr=[]
    let arr2=[] 
    let arr3=[] 
  
    const getColor=datas.map((items)=>items.info.map((item)=>item.color))
    let get=[...new Set(getColor.flat(1))]
    let all=["All"]
    let chuyen=all.concat(get) 

    const Handle=(e)=>{
        let mau=e.target.value
        if(mau!=="All"){
            for(let i=0;i<datas.length;i++){
                  
                if(datas[i].info.some((item)=>item.color===mau)){
                 let c=  datas[i].info.filter((item)=>item.color===mau)
                arr=arr.concat(c)   
                arr3=arr3.concat(datas[i])
            }
        }
        arr.map((item,index)=>{
            let value={
                name:arr3[index].name,
                price:arr3[index].price,
                image:item.image,
                id:arr3[index].id
            }
                arr2=arr2.concat(value)
           changeView(arr2)
        })
        }
        else if(mau==="All"){
            changeColor("All")
            let arr=[];
        datas.map((item)=>{
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
           
        } 
        return(
        <div className="">
            <ul className="h-100 border my-3 ">
            <li className="center"><span>Theo màu sắc</span></li>
            </ul>
            <select onChange={Handle} className="h-100 w-50">
               {chuyen.map((color,index)=>{
                  return(
                <>
                   <option value={color} id={index} key={index}>{color}</option>
                </>
                  )
               })}
            </select>  
        </div>
       )
    }
     export default SearchColor;
