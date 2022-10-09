import { Link } from 'react-router-dom';
function View({image,name,price,type,id,trang}){
     
      


        let price_millions=Math.floor(price/1000000)
        let thousand=(price-price_millions*1000000)/100000
        let price_thousand=Math.floor(thousand)


        return(
            
       <>
       <Link className='Link2' to={`/${type}/${trang}/${id}`}>
        <div className='view border h-100'>
        <div className='sale'><span>-25%</span></div>

       <img src={image} className="h-80 w-100"></img>
       
       <div className=" w-100 ">
        <div className=''>
            <div className='d-flex justify-content-center'><div className='name_shoe'>{name}</div></div>
            <div className='d-flex justify-content-center'><div className='price '>{price_millions}.{price_thousand}00.000 ₫</div></div>
        </div>
       
        
       </div>
        
       </div>
       </Link>
     
       </>
      
        
        
         
        )
    }


export default View;
