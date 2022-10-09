import { AppContext } from "../context"
import { useContext} from "react"
import {BsBasket} from 'react-icons/bs';
import { Link } from 'react-router-dom';
function Cart(){
    const{item}=useContext(AppContext) 
  
  
   
    return(
      <ul className=" ">
        <li className="p-lg-1  cart_pc">
          <Link className="Link" to="/Pay">
          <span className="yellow_hover">GIỎ HÀNG: <span style={{color:"red"}}>{item}</span></span>
          </Link>
        </li>
        <li className="p-lg-1 cart_mobile">
          <Link className="Link" to="/Pay">
          <span className="yellow_hover"><BsBasket className="cart_mobile_icon"/> <span style={{color:"red"}}>{item}</span></span>
          </Link>
        </li>
      </ul>
    )
}
export default Cart