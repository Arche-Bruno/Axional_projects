import {sectionSectors} from "../assest/index"
import Card_button from "../components_cards/Card_button"
const Section_sectors = ()=>{
   return(
    <div className="full flex flex-col xl:flex-row   bg-[#fff] pt-24 px-24">
      <div className="w-full xl:w-[30%]">
        <span className="text-[35px] xl:text-[48px] font-normal">
          Algunas cifras para conocernos mejor
        </span>
      </div>

      <div className=" w-full xl:w-[70%] flex flex-col items-end ">
        <div className="w-full flex flex-col">
        {sectionSectors.map((item,index)=>(
         <div className="w-full  flex items-center gap-1 justify-between  border-t-[1px] border-text_secundary py-12" key={index}>
            <div className="w-[75%] h-full flex flex-col items-start gap-8">
                <h2 className="text-[28px] font-normal">{item.title} </h2>
                <span className="text-[18px] font-light">{item.text_content} </span>
                <button className=" border border-slate-900 py-5 px-12">
      <span className="text-[18px] font-light">{item.btn_1}</span>
    </button>
            </div>
            <div className="w-[25%] overflow-hidden">
                <img src={item.img} alt="image_sectors" className="w-full" />
            </div>

         </div>
       ))}
        </div>
    
      </div>
    </div>
   )
}
export default Section_sectors