import { useParams } from 'react-router-dom'
import { AppContext } from "../context"
import { React,useContext,useEffect} from "react"
import Search from './Search';
import Sort from './Sort';
import SubHandle from './SubHandle';
import Data from '../data';


function Xuli(){
   
    let arr=[]
    let numbers
    const{view,number}=useContext(AppContext)
    useEffect(() => {
        window.scrollTo(0,0)
        
      }, [view,number]);
    
    const {type} = useParams()
    if(type==="male"){
         numbers=0;
       
    }
    else if(type==="female"){
        numbers=1;
        
   }
    else if(type==="children"){
        numbers=2;
       
   }
    else if(type==="sport"){
        numbers=3;
       
   }

   Data[numbers].private.map((item)=>{
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
  
   if(view===1){
       return(
        <div className='center'>
        <div className='size row '>
        <div className="col-2 p-0 row">
            <div className='col-xl-10'><Search/></div>
            <div className='col-xl-1'><div className='line4'></div></div>
           
        </div>
        <div className="col-10 p-0 ">
        <Sort/>
        <div className='center'>
        <h1>Không tìm thấy sản phẩm phù hợp !</h1>
        </div>
        </div>
        </div>
        </div>  
       )
   }
   else if(view!==0&&view!==1){
       return(
      <SubHandle arr={view} length={view.length}/>
       )
   }
   else if(view===0){
    return(
      <SubHandle arr={arr} length={arr.length}/>
    )
   }
  

  
    
    }

    export default Xuli;

