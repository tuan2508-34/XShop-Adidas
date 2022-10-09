import Sub1 from "./sub_nav1"
import Sub2 from "./sub_nav2"
import Sub3 from  "./sub_nav3"
function Navbar(){
    return(
        <div className="container-fluid  Navbar" >
            <Sub1 className=""/>
            <Sub2 />
            <Sub3/>
        </div>
    )
}
export default Navbar;