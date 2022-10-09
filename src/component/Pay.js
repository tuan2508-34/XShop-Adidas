import {useContext} from "react" 
import { AppContext } from "../context"  
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'; 
import {RiDeleteBinLine } from 'react-icons/ri'; 
import Money from "./money";
function Pay(){
    const{sp,DeleteSp,upp,down}=useContext(AppContext)
   
   if(sp.length!==0){
    return(
      <div className="pay">
        <div className="size out">
            <div className="pay_info">
              <div className="col-5 sp">SẢN PHẨM</div>
              <div className="col-2 center">GIÁ</div>
              <div className="col-2 center">SỐ LƯỢNG</div>
              <div className="col-3 center">THÀNH TIỀN</div>
            </div>
           
        {sp.map((item,index)=>{

            return(
              <div className="col-12 pay_info_main">
                <div className="pay_info_1">
                  <img src={item.img} className="im"/>
                  </div>
                <div className="pay_info_2 center">
                  <div className="chu">{item.name}</div>
                  <div className="chu">SIZE: {item.size}</div>
                </div>
                

                <div className="pay_info_3 center chu"><Money price={item.price} /></div>

                <div className='pay_info_4 center chu'>
                <div className='pay_info_4_arrow '><div className='' onClick={()=>down(index)}><IoIosArrowBack/></div></div>
                  <div className="pay_info_4_info">{item.slot}</div>
                 
                  <div className='pay_info_4_arrow '><div className='' onClick={()=>upp(index)}><IoIosArrowForward/></div></div>
                
                </div>


                <div className="pay_info_5 center chu"><span><Money price={item.slot*item.price}/></span></div>
               
                <div className="bin center chu" onClick={()=>DeleteSp(item)}><span><RiDeleteBinLine/></span></div>  
            </div>
               )
           })}
           </div>
    </div>
    )
        }
    else
    return(
        <div className="empty">giỏ hàng trống</div>
    )
}
export default Pay;