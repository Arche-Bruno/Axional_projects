import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import {
  ModelContentHeader,
  ModelItem,
  ModelContentGalley,
  ModelcontentSectors,
} from "./interfaces/interface";

export const listsItems: ModelItem[] = [
  {
    name: "Quiénes somos",
  },
  {
    name: "Marcas",
  },
  {
    name: "Sala de prensa",
  },
  {
    name: "Publicidad",
    ICONOARROW: MdOutlineKeyboardArrowDown,
  },
  {
    name: "Careers",
    ICONOARROW: MdOutlineKeyboardArrowDown,
  },
];

export const contentHeader: ModelContentHeader[] = [
  {
    title: "Publicidad",
    content:
      "Creando conexiones perfectas Descubre cómo impulsar tu negocio con campañas efectivas",
    contentImg:
      "https://adevinta.com/wp-content/uploads/2024/05/priscilla-du-preez-XkKCui44iM0-unsplash.jpg.webp",
  },
];
export const contentGalley: ModelContentGalley[] = [
  {
    title: "",
    subTitle: "",

    bg_content: "",
    isContent: false,
  },
  {
    title: "6",
    subTitle: "marketplaces digitales",

    bg_content: "#FFFFFF",
    isContent: true,
    color: "#000",
  },
  {
    title: "",
    subTitle: "",
    img: "https://adevinta.com/wp-content/uploads/2024/03/DTS_INDIE_COPSON_00035-650x650.jpg.webp",
    isContent: true,
  },
  {
    title: "18 millones",
    subTitle: "de usuarios únicos cada mes",

    bg_content: "#0052ff",
    isContent: true,
    color: "#fff",
  },
  {
    title: "",
    subTitle: "",

    isContent: false,
  },
  {
    title: "146 millones",
    subTitle: "de visitas mensuales",

    bg_content: "#1d1f2a",
    isContent: true,
    color: "#fff",
  },
  {
    title: "",
    subTitle: "",
    img: "https://adevinta.com/wp-content/uploads/2024/03/pexels-ivan-samkov-4458554-650x650.jpg.webp",
    isContent: true,
  },
  {
    title: "+1.600",
    subTitle: "empleados en toda España",

    bg_content: "#cc9aff",
    isContent: true,
    color: "#000",
  },

  {
    title: "",
    subTitle: "",

    isContent: false,
  },
];

export const sectionSectors:ModelcontentSectors[] =[
    {
        title:"Re-Commerce",
        text_content:"La aplicación de Milanuncios es una herramienta fundamental en la transición hacia una economía circular y el ahorro económico de la sociedad. A través de esta plataforma, fomentamos la reutilización y promovemos un consumo responsable y sostenible, contribuyendo así a reducir el consumo masivo de objetos nuevos.",
        img:"https://adevinta.com/wp-content/uploads/2024/03/pexels-liza-summer-6347920-650x650.jpg.webp",
        btn_1:"Ir a Milanuncios"
        
    },
    {
        title:"Movilidad",
        text_content:"Gracias a coches.net y motos.net, tenemos la solución de movilidad más adecuada para cada persona en cualquier etapa de su vida. Con una amplia gama de vehículos nuevos, KM 0, segunda mano, renting o suscripción, generamos un impacto positivo en el medio ambiente, la economía y la sociedad.",
        img:"https://adevinta.com/wp-content/uploads/2024/03/pexels-kindel-media-9799729-650x650.jpg.webp",
        btn_1:"Ir a coches.net",
        btn_2:"Ir a motos.net"
        
    },
    {
        title:"Inmuebles",
        text_content:"Nuestros portales Fotocasa y habitaclia hacen que encontrar, vender o alquilar una vivienda sea una experiencia sencilla y libre de estrés.",
        img:"https://adevinta.com/wp-content/uploads/2024/05/RealEstate_keys-650x650.jpg.webp",
        btn_1:"Ir a Fotocasa",
        btn_2:"Ir a motos.net"
        
    },
    {
        title:"Empleo",
        text_content:"Nuestros portales Fotocasa y habitaclia hacen que encontrar, vender o alquilar una vivienda sea una experiencia sencilla y libre de estrés.",
        img:"https://adevinta.com/wp-content/uploads/2024/05/Death_to_Stock_Weekend_Brainstorm_7-650x650.jpg.webp",
        btn_1:"Ir a infoJobs",
       
        
    },
    {
        title:"Empleo",
        text_content:"Nuestros portales Fotocasa y habitaclia hacen que encontrar, vender o alquilar una vivienda sea una experiencia sencilla y libre de estrés.",
        img:"https://adevinta.com/wp-content/uploads/2024/05/Death_to_Stock_Weekend_Brainstorm_7-650x650.jpg.webp",
        btn_1:"Ir a infoJobs",
       
        
    },
]