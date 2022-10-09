import { Link } from 'react-router-dom';
import { AppContext } from "../context"
import { React,useContext} from "react"
function Sub_nav3(){
    const{changeType,changeView,types}=useContext(AppContext)

   
    function Male(){
        changeView(0)
        changeType(0)
    }
    function FeMale(){
        changeView(0)
        changeType(1)
    }
    function Kiss(){
        changeView(0)
        changeType(2)
    }
    function Sport(){
        changeView(0)
        changeType(3)
    }
    return(
      <div className='subNav3_container'>
        <div className='subNav3_container_main'>
          <ul className='subNav3_container_main_ul h-100  pb-2' >
              <li className='subNav3_container_main_li '><Link className='Link' to="/male" onClick={Male}><div className='roboto_20 yellow_hover subNav3_container_main_li_div'>NAM</div></Link></li>
              <li className='subNav3_container_main_li '><Link className='Link' to="/female" onClick={FeMale}><div  className='roboto_20 yellow_hover subNav3_container_main_li_div'>NỮ</div></Link></li>    
              <li className='subNav3_container_main_li '><Link className='Link' to="/children" onClick={Kiss}><div  className='roboto_20 yellow_hover subNav3_container_main_li_div'>TRẺ EM</div></Link></li>
              <li className='subNav3_container_main_li '><Link className='Link' to="/sport" onClick={Sport}><div  className='roboto_20 yellow_hover subNav3_container_main_li_div'>THỂ THAO</div></Link></li>
          </ul>
        </div>
      </div>
    
    )
}

export default Sub_nav3;