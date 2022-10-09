import { useParams} from 'react-router-dom'
import {useState,useContext,useEffect,useRef} from "react" 
import { AppContext } from "../context" 
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai';  
import {RiShoppingCartFill,RiVipDiamondLine,RiRefund2Line} from 'react-icons/ri';  
import {BsTelephone} from 'react-icons/bs';
import {FaShippingFast} from 'react-icons/fa';
 
import Data from "../data"

function Shop(){
    let number
    const{changeItem,getSp,sp,slotSP,changeSl}=useContext(AppContext)
    const [Color,setColor] = useState(0);
    
    function doimau(item){
       setColor(item)
       setSize(item.value)
       
    }
    useEffect(() => {
        window.scrollTo(0,0)
        
      }, []);
    
    const {id,type} = useParams(null)
   
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
    let obj=datas.filter((item)=>item.id===id)
    let photos=obj[0].info.map((item)=>item.image)
    const [im,setIm]=useState(photos[0])
    
    let name=obj[0].name
    let price=obj[0].price
    let price_millions=Math.floor(price/1000000)
    let thousand=(price-price_millions*1000000)/100000
    let price_thousand=Math.floor(thousand)
    let code=id
    let a=obj[0].info.filter((item)=>item.image===im)
    let b=a[0].sides.map((item)=>item.value)
    let c=a[0].sides.map((item)=>item.number)
    let arr2=[]
    for(let i=0;i<b.length;i++){
        let d={  
            value:b[i],
            number:c[i]
          }
        arr2=arr2.concat(d)
    }
   

    const [sl,setSl]=useState(c[0])
    const [Size,setSize]=useState(arr2[0].value)
    function handle(item){
        setIm(item) 
        setSl(c[0])
    }
   

    
    let slot
    let color
    if(sl!==0){
      slot="Còn Hàng"
      
    }
    else{
      slot="Hết Hàng"
      
    }

    function text(e){
      changeSl(parseInt(e.target.value, 10)) 
    }

    function Up(){
      changeSl(slotSP+1)
    }
    function Down(){
      
      changeSl(slotSP-1) 
    }
    console.log(sl)
    function Buy(){
        if(slotSP>=1&&sl!=0){
        let item={
            name:name,
            img:im,
            price:price,
            size:Size,
            slot:slotSP
        }
       getSp(item)
       changeItem(slotSP)
       changeSl(0)
    }
    else if(slotSP===0){
        window.alert("bạn chưa chọn số lượng sản phẩm")
    }
    
    else if(sl==0){
        window.alert("không còn kích cỡ size này !")
    }
    }
    function isNaN(x) {
        // Ép kiểu Number cho biến x
        x = Number(x);
        // Nếu x là NaN, NaN != NaN trả về true, các trường hợp khác sẽ trả về false
        return x != x;
    }
    if(slotSP<0){
        changeSl(0)
    }
    else if(isNaN(slotSP)){
        changeSl("")
    }
    
    return(
        <div className='center muahang_container'>
            <div className="muahang_container_main">
                <div className='muahang_container_main_img' >
                    <div className='muahang_container_main_img_list'>
        {
            photos.map((item,index)=>{
                return(
                    <div className='sub_img' key={index}>
                      <img onClick={()=>handle(item)} src={item} className="img"/>
                      </div>
                )
            })
        }
          </div>

        <div className='muahang_container_main_img_main'>
        <img src={im} className="img_main"/>
        </div>
        </div>


        <div className=' muahang_info' >
        <h1 className='muahang_info_name'>{name}</h1>
     
        <div className=' muahang_info_item my-2'>
            <div className='muahang_info_item_price '><div className=''>{price_millions}.{price_thousand}00.000 ₫</div></div>
            <div className=''>
            <div className='muahang_info_line'></div>
            </div>
            
            <div className='muahang_info_item_id'>
                <div className='muahang_info_item_id_1'><span  >Kho hàng: </span><span className='muahang_info_item_id_1_span'>{slot}</span></div>
                <div><span className='muahang_info_item_id_2'>Mã sản phẩm: <span className='muahang_info_item_id_2_code'>{code}</span></span></div>
            </div>
        </div>


        <div className='muahang_info_size'>
            <h1 className='muahang_info_size_h1'>Chọn size:</h1>
        </div>

        <div className='list_size'>
      
        {
            arr2.map((item,index)=>{return(
                
                <div className='size_value border ' onClick={()=> setSl(item.number)} key={index}> 
                  <div onClick={()=>doimau(item)} className={item} >
                    {item.value}
                  </div>
                </div>
                
            )})
        }
   
        </div>
        
        <div className='muahang_info_buy'>
         <div className='muahang_info_buy_detail'>
             <div className='width'>
             <input type="text" onChange={text} value={slotSP} className="w-100 h-100 input p-2"/>
             </div>
             <div className=''>
                 <div className='h-50'><button className='center w-100 h-100 p-2' onClick={Up}><AiOutlineUp/></button></div>
                 <div className='h-50'><button className='center w-100 h-100 p-2' onClick={Down}><AiOutlineDown/></button></div>
             </div>
             <button className='w-100 phone bg_red boder_none p-2' onClick={Buy}>Thêm vào giỏ hàng <RiShoppingCartFill/></button>
             
         </div>
         <div className='muahang_info_phone'>
             <div className='size center green h-100 phone'>
             <BsTelephone className=''/> <span className='phone_text'>Gọi điện</span> 
             </div>
            
             </div>
         </div>



         


         </div>
        
         </div>
         <div className='policy_shop border'>
             <div className=' policy_shop_detail'>
                 <div className=' policy_shop_icon'><RiVipDiamondLine/></div>
                 <div className='policy_shop_text'>Hàng chính hãng, chất lượng hàng đầu.</div> </div>
             <div className=' policy_shop_detail mx-2'>
                 <div className=' policy_shop_icon'><FaShippingFast/></div>
                 <div className='policy_shop_text'>Miễn phí giao hàng với đơn {"<"}500k</div></div>
             <div className=' policy_shop_detail'>
             <div className='policy_shop_icon '><RiRefund2Line/></div>
                 <div className='policy_shop_text'>Đổi hàng 30 ngày với thủ tục đơn giản</div></div>
             
         </div>

         
        </div>

       
    )
}
export default Shop;