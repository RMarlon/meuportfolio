"use client"

import { AboutMe } from "@/components/AboutMe";
import { Heade } from "@/components/Heade";
import { InfoTech } from "@/components/InfoTech";
import { MenuMobile } from "@/components/MenuMobile";
import { MyPortfolio } from "@/components/MyPortfolio";
import { Nav } from "@/components/Nav";
import { RedesAndLogo } from "@/components/Redes&Logo";
import { Skill } from "@/components/Skill";
import { listAbout } from "@/data/listAbout";
import { listHead } from "@/data/listHead";
import { listInfoTech } from "@/data/listInfoTech";
import { listMobileMenu } from "@/data/listMobileMenu";
import { listNav } from "@/data/listNav";
import { listProtfolio } from "@/data/listPortfolio";
import { listRedesAndLogo } from "@/data/listRedes&Logo";
import { listSkills } from "@/data/listSkills";


const Page = () => {

  const handleClick = () => {

    const mobileMenu = document.querySelector('#menu');
    mobileMenu?.classList.toggle('translate-x-full');

  }

  const showMore = () =>{
    const hiddenMenu = document.querySelector('#hidden');
    hiddenMenu?.classList.toggle('hidden');
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

        <div>
          <MyPortfolio works={listProtfolio} btnClick={showMore}/>
        </div>



      </div> {/* fim container */}
    </div>
  );
}

export default Page;