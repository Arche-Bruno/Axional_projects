import {contentHeader} from "../assest/index"
const Header =()=>{

    return(
        <section className="full  bg-bg_principal overflow-hidden">
          
        
               {contentHeader.map((item,index)=>(
                  <div  className="w-full max-h-[750px] flex flex-col xl:flex-row ">
                    <div className="w-full xl:w-[40%] p-10 2xl:p-24 flex flex-col justify-center gap-8">
                        <h1 className="text-[65px] text-white font-normal ">{item.title} </h1>
                        <span className="text-[17.5px] font-light text-white">{item.content} </span>
                     </div>
                     <div className="w-full xl:w-[60%] ">
                     <div className=" transition-all w-[770px] object-cover xl:w-full h-[550px] overflow-hidden xl:h-full ">
                        <img src={item.contentImg} className="w-full" alt="image_header" />
                    </div>
                     </div>
                
                  </div>
               ))}
         

        </section>
    )
}
export default Header