import { FaArrowRight } from "react-icons/fa6";
interface ModelCard{
  title:string,
  name:string
}
const Card_trayectory_title=({title,name}:ModelCard)=>{
    return(
 
  <div className="flex items-center gap-3 xl:gap-8">
             <div className="text-white">
                <FaArrowRight />
              </div>
              <div className="flex items-center gap-1">
              <span className="text-[14px] xl:text-[20px] text-white">{title} </span>
              <span className="text-[16px] xl:text-[22px] text-purple-600">{name} </span>
              </div>
             </div>
  
    )
}
export default Card_trayectory_title