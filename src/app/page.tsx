"use client"

import { Heade } from "@/components/Heade";
import { InfoTech } from "@/components/InfoTech";
import { MenuMobile } from "@/components/MenuMobile";
import { Nav } from "@/components/Nav";
import { RedesAndLogo } from "@/components/Redes&Logo";
import { listHead } from "@/data/listHead";
import { listInfoTech } from "@/data/listInfoTech";
import { listMobileMenu } from "@/data/listMobileMenu";
import { listNav } from "@/data/listNav";
import { listRedesAndLogo } from "@/data/listRedes&Logo";
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


      <div className="bg-black container mx-auto shadow shadow-[#410085]"> {/* início header */}
        <Heade head={listHead} />

        <div className="px-2 flex justify-center items-center py-30">
          <Nav menu={listNav} />
        </div>

        <div>
          <InfoTech infoTech={listInfoTech} />
        </div>

        <div className="flex justify-around pt-40 pb-40 bg-gray-950">
          <p>desc</p>

          <div className="w-[320px] h-[320px] border rounded-md flex justify-center items-center">
            <div className="flex flex-col gap-10"> 
            img
             <img src="" alt="" />
             <p className="text-2xl">Olá, eu sou Marlon</p>
            </div>
          </div>
        </div>

      </div> {/* fim header */}
    </div>
  );
}

export default Page;