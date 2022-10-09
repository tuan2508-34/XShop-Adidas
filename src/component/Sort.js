import SortName from "./sortName" 
import SortPrice from "./sortPrice"
import {BiSort} from "react-icons/bi" 
function Sort(){
   return(
       <>
      
       <div className="dropdown px-2">Sắp xếp<BiSort/>
       <ul className="dropdown-content border">
           <li><SortName/></li>
           <li><SortPrice/></li>
       </ul>
       </div>
     
       </>
   )
}
export default Sort;