"use client"

import { AboutMe } from "@/components/AboutMe";
import { Heade } from "@/components/Heade";
import { InfoTech } from "@/components/InfoTech";
import { MenuMobile } from "@/components/MenuMobile";
import { Nav } from "@/components/Nav";
import { RedesAndLogo } from "@/components/Redes&Logo";
import { Skill } from "@/components/Skill";
import { listAbout } from "@/data/listAbout";
import { listHead } from "@/data/listHead";
import { listInfoTech } from "@/data/listInfoTech";
import { listMobileMenu } from "@/data/listMobileMenu";
import { listNav } from "@/data/listNav";
import { listRedesAndLogo } from "@/data/listRedes&Logo";
import { listSkills } from "@/data/listSkills";
import { useState } from "react";


const Page = () => {

  const handleClick = () => {

    const mobileMenu = document.querySelector('#menu');
    mobileMenu?.classList.toggle('translate-x-full');

  }

  return (
    <div className="bg-gray-950 rounded-md relative z-10 font-display">

      <div className="">
        <MenuMobile menu={listMobileMenu} handleClick={handleClick} />
      </div>

      <div>
        <RedesAndLogo redeLogo={listRedesAndLogo} />
      </div>


      <div className="bg-black container mx-auto shadow shadow-[#410085]"> {/* início container */}
        <Heade head={listHead} />

        <div className="px-2 flex justify-center items-center py-30">
          <Nav menu={listNav} />
        </div>

        <div>
          <InfoTech infoTech={listInfoTech} />
        </div>

        <div>
          <AboutMe aboutMe={listAbout} />
        </div>

        <div>
          <Skill abilite={listSkills} />
        </div>

        <div className="flex flex-col items-center bg-gray-950 py-10 "> {/* início portfólio */}
          <div className="px-10 sm:px-0">
            <h2 className="text-6xl px-10 md:px-0">Meu <span className="text-[#410085]">portfólio</span></h2>
            <p className="text-gray-600 mt-4 px-10 md:px-0">
              Esses são alguns de meus projetos, eles ainda são simples, mas tenho orgulho
              do processo de aprendizado na criação de cada um.
            </p>
          </div>

          <article className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-4">

            <a href="https://rmarlon.github.io/Woman-Fashion/" target="_blank">
              <div className="min-w-50 h-[400px] shadow shadow-[#410085] rounded-md  bg-[url(/assets/womanfashion.png)] bg-cover bg-position-[bottom-0rem] hover:bg-position-[left_bottom_10rem] duration-[10s]">
                <div className="w-full h-full bg-[#6c443362] rounded-md flex items-center justify-center">Waman Fashion</div>
              </div>
            </a>

            <a href="https://rmarlon.github.io/Prototype-MediCenter/" target="_blank" className="">
              <div className="min-w-50 h-[400px] shadow shadow-[#410085] rounded-md bg-[url(/assets/medicenter.png)] bg-cover bg-position-[bottom-0rem] hover:bg-position-[left_bottom_10rem] duration-[10s]">
                <div className="w-full h-full bg-[#0077c775] rounded-md flex items-center justify-center">Medicenter</div>
              </div>
            </a>

            <a href="https://rmarlon.github.io/Starbucks/" target="_blank">
              <div  className="min-w-50 h-[400px]  shadow shadow-[#410085] rounded-md flex items-center justify-center bg-[url(/assets/starbucks.png)] bg-cover bg-position-[bottom-0rem] hover:bg-position-[left_bottom_10rem] duration-[10s]">
                <div className="w-full h-full bg-[#11705059] rounded-md flex items-center justify-center">Starbucks</div>
              </div>
            </a>

            <a href="https://rmarlon.github.io/Uma-mercearia/src/index.html#slider" target="_blank">
              <div className="min-w-50 h-[400px] shadow shadow-[#410085] rounded-md flex items-center justify-center bg-[url(/assets/umamercearia.png)] bg-cover bg-position-[bottom-0rem] hover:bg-position-[left_bottom_10rem] duration-[10s]">
                <div className="w-full h-full bg-[#fb923c38] rounded-md flex items-center justify-center">Uma Mercearia</div>
              </div>
            </a>

          </article>

        </div> {/* Fim portfólio */}

      </div> {/* fim container */}
    </div>
  );
}

export default Page;