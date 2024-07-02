const Section_info = () => {
  return (
    <section className="full  bg-bg_principal overflow-hidden">
      <div className="w-full max-h-[750px] flex flex-col items-start xl:flex-row ">
        <div className="w-full xl:w-[60%] ">
          <div className=" transition-all w-[670px] object-cover xl:w-full h-full  overflow-hidden xl:h-full ">
            <img
              src="https://adevinta.com/wp-content/uploads/2024/03/ADEVINTA_1609_38-2000x1125.jpg.webp"
              className="w-full"
              alt="image_header"
            />
          </div>
        </div>
        <div className="w-full h-full xl:w-[40%] p-10 2xl:p-16 flex flex-col justify-center gap-8 bg-slate-500">
          <h1 className="text-[65px] text-white font-normal ">
            Construye los marketplaces del futuro
          </h1>
          <span className="text-[17.5px] font-light text-white">
            Más de 1.600 Adevintans lo dan todo para ayudar a nuestros 18
            millones de usuarios en España a encontrar lo que están buscando en
            los momentos clave de su vida. Como equipo, nuestras ideas
            trascienden fronteras generando un impacto positivo en las 120
            millones de personas que usan nuestros portales en Europa. ¿Te unes
            a este viaje?
          </span>
          <button className=" border border-slate-100 py-5 px-12">
            <span className="text-[18px] font-light text-white">
              Mas información
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Section_info;
