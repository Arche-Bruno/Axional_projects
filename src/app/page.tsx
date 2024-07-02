"use client"
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Section_gallery from "@/components/Section_gallery"
import Section_trayectory from "@/components/Section_trayectory"
import Section_info from "@/components/Section_info"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import logoImg from "../imgs/logoAxional.png"
import Image from "next/image";
import Section_sectors from "@/components/Section_sectors";
export default function Home() {
  const [activeHamburger,setActiveHamburger]=useState<boolean>(false)

  const handleClickHamburger =()=>{
    setActiveHamburger(!activeHamburger)
  }
  return (
    <main className="w-full min-h-screen ">
      <nav className="w-full bg-[#ffffff] ">
        <div className="w-[90%] mx-auto py-5 flex items-center justify-between">
          <div className="grid items-center">
            <div className="w-[120px] xl:w-[180px]">
           <Image src={logoImg} alt="logo_img" className="w-full"/>
            </div>
          </div>
        <NavBar>
        </NavBar>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1">
              <span className="text-large ">ES</span>
              <div className="icon">
                <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
              </div>
            </div>
            <div className="icon">
              <IoIosSearch>
              </IoIosSearch>
            </div>
            <div className="xl:hidden">
              <button className={`style-hamburger ${activeHamburger ? "active" : ""}`} onClick={handleClickHamburger}>
                <div></div>
                <div></div>
                <div></div>
              </button>

            </div>
          </div>

        </div>

      </nav>

      <Header>

      </Header>
      <Section_trayectory>

      </Section_trayectory>
       <Section_gallery>

       </Section_gallery>
       <Section_sectors></Section_sectors>
       <Section_info>

       </Section_info>


    </main>
  );
}
