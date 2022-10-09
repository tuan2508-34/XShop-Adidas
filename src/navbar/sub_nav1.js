import { FaFacebook } from 'react-icons/fa';
import {SiTwitter} from 'react-icons/si';
import Cart from '../component/Cart';
function Sub_nav1(){
    
    return(
          <div className="subNav1_container">
              <div className="row size h-100">
        <div className="col-xl-6 col-lg-6  p-0">
        <ul className="d-flex h-100 roboto">

            <li className="center py-2"><span className="yellow_hover">Tin tức</span></li>
            <div className="line bg-light"></div>
            <li className="center py-2"><span className="yellow_hover">Kênh người bán</span></li>
            <div className="line bg-light"></div>
            <li className="center py-2"><span className="yellow_hover">Tra cứu đơn hàng</span></li>
            <div className="line bg-light"></div>
            <li className="center py-2">
                <ul className="d-flex">
                     <li className="center"><span className="yellow_hover">Kết nối</span></li>
                     <li className="center px-2"><FaFacebook className="icon"/></li>
                     <li className="center"><SiTwitter className="icon"/></li>
                </ul>
            </li>
        </ul>
        </div>
        
        <div className="col-xl-6 col-lg-6  p-0">
        <ul className="d-flex flex-row-reverse h-100 roboto">
            
            <li className=" center"><span className="yellow_hover">TÀI KHOẢN</span></li>
            <div className="line bg-light"></div>
            <li className=" center">
                <Cart/>
            </li>
            
        </ul>

        </div>
        
    </div>


          </div>
       

    
    )
}

export default Sub_nav1;