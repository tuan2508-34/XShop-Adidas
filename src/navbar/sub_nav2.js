import {HiOutlinePhone} from 'react-icons/hi';
import {BsSearch} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {IoIosArrowForward} from 'react-icons/io';

import { useState, useRef, useEffect } from 'react';
import Cart from '../component/Cart';
function Sub_nav2(){
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const toggleLinks1 = () => {
        setShowLinks(true);
      };
      const toggleLinks2 = () => {
        setShowLinks(false);
      };
      useEffect(() => {
         if(showLinks===true) {
          linksContainerRef.current.style.display = 'flex';
        }
        else if(showLinks===false){
          linksContainerRef.current.style.display = 'none';
        }
       
      }, [showLinks]);
      
    return(
        <>
        <div ref={linksContainerRef} className="subNav2_container_menu none ">
           <div className=' subNav2_container_menu_base'>        
            <div  className='subNav2_container_menu_head' ></div>
            <div className='subNav2_container_menu_base_item'><span>Tin tức <IoIosArrowForward></IoIosArrowForward></span></div>
            <div className='subNav2_container_menu_base_item'><span>Kênh người bán <IoIosArrowForward></IoIosArrowForward></span></div>
            <div className='subNav2_container_menu_base_item'><span>Tra cứu đơn hàng <IoIosArrowForward></IoIosArrowForward></span></div>
            <div className='subNav2_container_menu_base_item'><span>Kết nối <IoIosArrowForward></IoIosArrowForward></span></div>
            <div  className='subNav2_container_menu_line' ></div>
            <div className='subNav2_container_menu_base_item'><span>TÀI KHOẢN <IoIosArrowForward></IoIosArrowForward></span></div>
          </div>    
          <div className='col-8 subNav2_container_menu_space'>
          </div>  
          <div className='subNav2_container_menu_space_close' onClick={toggleLinks2} ><AiOutlineClose/></div>      
        </div>


        <div className="subNav2_container">
            <div className="subNav2_container_main">
              <ul className="row subNav2_container_main_list py-3 r">
                  <li className="col-xl-4 col-lg-4 col-6 subNav2_container_main_list_1 ">


                      <div className="subNav2_container_main_list_1_button col-1" onClick={toggleLinks1}><GiHamburgerMenu/></div>
                      

                      <img className='col-9 w-80 p-0' src='https://giayxshop.vn/wp-content/uploads/2018/12/xshop-light.png'/>
                      
                  </li>
                  <li className="col-xl-4 col-lg-4 col-3 subNav2_container_main_list_2">
                      <div className="subNav2_container_main_list_2_main">
                      <input className="subNav2_container_main_list_2_main_input" placeholder="Bạn muốn mua gì?"/>
                      <div className="subNav2_container_main_list_2_main_button"><BsSearch/></div>
                      </div> 
                  </li>
                  <li className="col-xl-4 col-lg-4 col-3 d-flex flex-row-reverse p-0">
                      
                      <ul className='subNav2_container_main_list_3_phone'>
                          <li><span className="roboto_15">Tổng đài: 1900 232322</span></li>
                          <li><span className="roboto_15">Hotline: 093.934.8888</span></li>
                      </ul>
                      <div className='subNav2_container_main_list_3_phone_icon px-1'><HiOutlinePhone/></div>
                      <div className='subNav2_container_main_list_3_cart'><Cart/></div>
                  </li>
               </ul>
            </div>
        </div>
        </>
    )
}
export default Sub_nav2;