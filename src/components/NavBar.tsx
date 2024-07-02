import { listsItems } from "../assest/index"
import Card_list from "@/components/Card_list";
const NavBar = ()=>{
    return(
        <div className="flex items-center gap-10 hidden xl:block">
            <ul className="flex items-center gap-8">
              {listsItems?.map((item, index) => (
                <div key={index}>
                  <Card_list
                    name={item.name}
                    ICONOARROW={item.ICONOARROW}
                  >
                  </Card_list>
                </div>


              ))}
            </ul>


          </div>
    )
}


export default NavBar