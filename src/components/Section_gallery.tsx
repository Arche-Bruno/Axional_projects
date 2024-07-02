import { contentGalley } from "../assest/index";
const Section_gallery = () => {
  return (
    <div className="full flex flex-col xl:flex-row   bg-[#c3d8ee]">
      <div className="w-full xl:w-[30%]">
        <span className="text-[35px] xl:text-[48px] font-normal">
          Algunas cifras para conocernos mejor
        </span>
      </div>

      <div className=" w-full xl:w-[70%] flex flex-col items-end pr-16">
        <div className="content_gallery w-full max-w-[1250px] ">
          {contentGalley.map((item, index) => {
            const separateItem = item.title.split(" ");
            const number = separateItem[0];
            const word = separateItem[1];
            return (
              <div
                style={{ backgroundColor: item.bg_content || "transparent" }}
                className={`flex items-end pb-8  w-full overflow-hidden ${
                  item.isContent ? "h-[400px] " : "h-[0px] xl:h-[400px] "
                }  text-white`}
              >
                <div className={`${item.title || item.subTitle ?"w-[85%] mx-auto" :"w-full h-full"} `}>
                <div className="flex flex-col gap-4 ">
                    {item.title.length>0 && 
                        <div className="flex items-center gap-2">
                        <span
                          style={{ color: item?.color }}
                          className="text-[68px] font-normal "
                        >
                          {number}
                        </span>
                        <span className="text-[46px] font-light">{word}</span>
                      </div>
                    }
              

                  <span
                    style={{ color: item?.color }}
                    className="text-[18px] font-normal"
                  >
                    {item.subTitle}
                  </span>
                </div>
                {item.img && (
                  <div className=" w-full">
                    <img src={`${item.img}`} className="w-full" alt="" />
                  </div>
                )}
                </div>
               
             
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Section_gallery;
