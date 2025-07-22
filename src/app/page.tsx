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

        <div className="flex justify-around items-center py-50">
          <div>
            <h2 className="text-5xl">Sobre mim</h2>
            <div>
              <p>desc</p>
            </div>
          </div>

          <div>
            img
            <img src="" alt="" />
          </div>
        </div>


      </div> {/* fim header */}
    </div>
  );
}

export default Page;