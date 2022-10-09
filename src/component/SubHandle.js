import { useParams, Link } from 'react-router-dom'
import {useContext,useEffect} from 'react';
import { AppContext } from "../context"

import Search from './Search';
import Sort from './Sort';
import View from './View';

    function SubHandle({arr,length}){
       let mang=[]
       let mang2=[]
       let {type,page} = useParams()
       const{view,chap,changeChap}=useContext(AppContext)
      
       // xác định số trang
       let numberChap
       let a=Math.floor(length/12)
       if(length%12>0){numberChap=a+1}
       else if(length%12===0){numberChap=a}
       else if(length<12){numberChap=1}
       for(let i=0;i<numberChap;i++){
        mang2=mang2.concat(i+1)
        }
        useEffect(() => {
            window.scrollTo(0,0)
            
          }, [chap]);
    
    if(length<=12){
    return(
        <div className='center'>
        <div className='size row '>
        <div className="col-lg-2  row">
            <div className='col-lg-10 search_pc p-0'><Search/></div>
            <div className='col-lg-2 center p-0'><div className='line4'></div></div>
        </div>
        <div className="col-lg-10 p-0">
        <div className='row'>
        <div className='sub_tab_mobile '>
        <div className='search_mobile'><Search/></div>
        <Sort/>
        
        </div>
        </div>
        <div className='row'>
        {arr.map((item,index)=>{
            return(
                <div className='col-lg-3 col-md-4 col-6 p-3 ' key={index}>
                <View image={item.image} name={item.name} price={item.price} type={type} id={item.id}/>
                </div>
            )     
        }
        )}
        </div>

        <div className='center mt-3'>
                 {mang2.map((item,index)=>
                     {
                         return(
                             <>
                               <Link className='Link2' to={`/${type}/${item}`}>
                             <div onClick={()=>changeChap(item)} className='m-3' key={index}>{item}</div>
                                 </Link>  
                             </>
                         )
                     }
                     )}
        </div>


        </div>
        </div>
       </div>
    )
    }
  

    else if(length>12){
        if(page===undefined){
            page=1
        }
        if(page===undefined||(view.length>0&&page===1)||page===1){
            for(let i=1;i<=12;i++){
               mang=mang.concat(arr[i-1])
            }
            return(
                
      <div className='center'>
        <div className='size row '>
        <div className="col-lg-2 p-0 row">
            <div className='col-lg-10 search_pc'><Search/></div>
            <div className='col-lg-1'><div className='line4'></div></div>
           
        </div>
        <div className="col-lg-10 p-0 ">
        <div className='row'>
        <div className='sub_tab_mobile '>
        <div className='search_mobile'><Search/></div>
        <Sort/>
        
        </div>
        </div>
        <div className='row '>
        {mang.map((item,index)=>{
            return(
                <div className='col-lg-3 col-md-4 col-6 p-3 ' key={index}>
                <View image={item.image} name={item.name} price={item.price} type={type} id={item.id}/>
                </div>
            )     
        }
        )}
        </div>
        <div className='center mt-3'>
                 {mang2.map((item,index)=>
                     {
                         return(
                             <>
                               <Link className='Link2' to={`/${type}/${item}`}>
                             <div onClick={()=>changeChap(item)} className='m-3 ' key={index}>{item}</div>
                                 </Link>  
                             </>
                         )
                     }
                     )}
        </div>
         </div>
        </div>
       </div>
            )
        }

        else if(page!==1) {
            let top=12

            if(top*page>length){
                let i=top*page-11 
                for(i;i<=length;i++){
                   mang=mang.concat(arr[i-1])
                }
                return(
         <div className='center'>
        <div className='size row '>
        <div className="col-lg-2 p-0 row">
            <div className='col-lg-10 search_pc'><Search/></div>
            <div className='col-lg-1'><div className='line4'></div></div>
        </div>
        <div className="col-lg-10 p-0 ">
        <div className='row'>
        <div className='sub_tab_mobile '>
        <div className='search_mobile'><Search/></div>
        <Sort/>
        
        </div>
        </div>
        <div className='row'>
        {mang.map((item,index)=>{
            return(
                <div className='col-lg-3 col-md-4 col-6 p-3 ' key={index}>
                <View image={item.image} name={item.name} price={item.price} type={type} id={item.id}/>
                </div>
            )     
        }
        )}
        </div>
        <div className='center mt-3'>
                     {mang2.map((item,index)=>
                     {
                         return(
                             <>
                             <Link className='Link2' to={`/${type}/${item}`}>
                             <div onClick={()=>changeChap(item)} className='m-3 ' key={index}>{item}</div>
                                 </Link>  
                             </>
                         )
                     }
                     )}
        </div>
                     </div>
        </div>
       </div>
                )
            }
            else if(top*page<length){
                let i=top*page-11 
                for(i;i<=top*page;i++){
                   mang=mang.concat(arr[i-1])
                }
                return(
     <div className='center'>
        <div className='size row '>
        <div className="col-lg-2 p-0 row">
            <div className='col-lg-10 search_pc'><Search/></div>
            <div className='col-lg-1'><div className='line4'></div></div>
           
        </div>
        <div className="col-lg-10 p-0 ">
        <div className='row'>
        <div className='sub_tab_mobile '>
        <div className='search_mobile'><Search/></div>
        <Sort/>
        
        </div>
        </div>
        <div className='row'>
        {mang.map((item,index)=>{
            return(
                <div className='col-lg-3 col-md-4 col-6 p-3 ' key={index}>
                <View image={item.image} name={item.name} price={item.price} type={type} id={item.id}/>
                </div>
            )     
        }
        )}
        </div>
        <div className='center mt-3'>
                    {mang2.map((item,index)=>
                     {
                         return(
                             <>
                             <Link className='Link2' to={`/${type}/${item}`}>
                             <div onClick={()=>changeChap(item)} className='m-3 ' key={index}>{item}</div>
                                 </Link>  
                             </>
                         )
                     }
                     )}
        </div>
                    </div>
        </div>
       </div>
                )
            }
        } 
    }
    
   
}
export default SubHandle;