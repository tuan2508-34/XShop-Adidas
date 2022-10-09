import SearchColor from "./searchColor";
import SearchPrice from "./searchPrice";
import {GoSearch} from 'react-icons/go';
function Search(){
   return(
       <>
       <div className="search_pc_main">Tìm kiếm <GoSearch/>
       <SearchColor/>
       <SearchPrice/>
       </div>
       <div className="dropdown search_mobile_main center">Tìm kiếm  <GoSearch/>
       <div className="dropdown-content">
       <SearchColor/>
       <SearchPrice/>
       </div>
       </div>
       </>
   )
}
export default Search;