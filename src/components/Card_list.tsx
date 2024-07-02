import { ModelItem } from "@/assest/interfaces/interface"
import { useState } from "react"

const Card_list = ({ name, ICONOARROW }: ModelItem) => {
    const [isHover, setIsHover]=useState<boolean>(false)
    const handleHover =()=>{
        setIsHover(true)
    }
    const handleHoverLeave = ()=>{
        setIsHover(false)
    }
    return (
        <li className="flex items-center gap-1 cursor-pointer transition-all ease duration-500" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
            
     
            <div className="relative w-full group h-full">
            <span className="text-large group-hover:text-text_secundary transition-all duration-500 ease">
                {name}
            </span>
            <div className={`${!ICONOARROW ? "abosulte w-0 bg-text_secundary left-0 top-3 h-[1.5px] transition-all ease duration-500 rounded-xl group-hover:w-full" : ""}  `}>

            </div>
            </div>
         <div className={`  style_icon ${isHover ? "animation  text-text_secundary" :"reverse"} `}>
         {ICONOARROW &&
                <div className="icon">
                    <ICONOARROW></ICONOARROW>
                </div>
            }

         </div>
           

        </li>

    )
}
export default Card_list