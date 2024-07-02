import Card_trayectory_title from "../components_cards/Card_trayectory_title";
const Section_trayectory = () => {
  return (
    <div className="w-full h-full min-h-[550px]  bg-slate-800">
      <div className="w-[95%] xl:w-[85%] mx-auto ">
        <div className="flex flex-col justify-between h-full py-4 xl:py-8  ">
          <div className="w-full flex items-center gap-3 md:gap-28 xl:gap-40 2xl:gap-48 mt-10 ">
            <Card_trayectory_title
              title="Conoce"
              name="Adevinta"
            ></Card_trayectory_title>
            <Card_trayectory_title
              title="Explora las "
              name="Oportunidades de empleo"
            ></Card_trayectory_title>
          </div>
          <div className="">
            <span className="text-[35px] xl:text-[48px]  font-normal text-white">
              Damos una </span> <span className="text-[35px] xl:text-[48px] font-normal text-purple-600">nueva vida</span> <span className="text-[48px] font-normal text-white">
              a los hogares, a las carreras profesionales,
              a los vehículos y a cualquier otro objeto que pueda tener un nuevo
              uso.
                </span> 
            
          </div>
          <div className="">
            <span className="text-[24px] text-white">
              Damos una nueva vida a los hogares, a las carreras profesionales,
              a los vehículos y a cualquier otro objeto que pueda tener un nuevo
              uso.
            </span>
          </div>
        </div>
    
      </div>
   
    </div>
  );
};
export default Section_trayectory;
