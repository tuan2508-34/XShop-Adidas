import "./intro.css"
import { Link } from 'react-router-dom';
import { AppContext } from "../context"
import { React,useContext} from "react"
function Intro(){
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
        <div className=" container-fluid p-0 center">
            <div className="main_intro">
              <div className="item1 Item center">
                <div className="item"><span className="main_title">ADIDAS</span><span className="sp_title">Giày thể thao Adidas chính hãng, giày chạy bộ Adidas, giày running Adidas, những đôi giày mới nhất và đẹp nhất!<div className="light"></div></span></div>
              </div>
              <div className="item2 Item center"  >
                <div className="item"><span className="main_title">SALE</span><span className="sp_title">ll<div className="light"></div></span></div>
              </div>
              <Link className="item3 Item center" to="/male" >
                <div className="item"><span className="main_title">GIÀY NAM</span><span className="sp_title"><div className="light"></div></span></div>
              </Link>
              <Link className="item4 Item center" to="/female" >
                <div className="item"><span className="main_title">GIÀY NỮ</span><span className="sp_title"><div className="light"></div></span></div>
              </Link>
              <Link className="item5 Item center" to="/sport" >
                <div className="item"><span className="main_title">GIÀY ĐÁ BÓNG</span><span className="sp_title"><div className="light"></div></span></div>
              </Link>
              <Link className="item6 Item center" to="/children" >
                <div className="item"><span className="main_title">GIÀY TRẺ EM</span><span className="sp_title"><div className="light"></div></span></div>
              </Link>
            </div>

        </div>
    )
}
export default Intro;

