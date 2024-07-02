import { IconType } from "react-icons";
 export interface ModelItem{
    name:string,
    ICONOARROW?:IconType 
 }
 export interface ModelContentHeader{
   title:string,
   content:string,
   contentImg:string,
 }
 export interface ModelContentGalley{
  title:string | any,
  subTitle:string | any,
  img?:string,
  bg_content?:string
  isContent:boolean ,
  color?:string,
 }


 export interface ModelcontentSectors{
   title:string,
   text_content:string,
   img:string,
   btn_1:string,
   btn_2?:string
 }