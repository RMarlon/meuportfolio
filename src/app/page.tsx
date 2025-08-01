"use client"

import { AboutMe } from "@/components/about/AboutMe";
import { ContactMe } from "@/components/contact/ContactMe";
import { Foot } from "@/components/foot/Foot";
import { Heade } from "@/components/header/Heade";
import { InfoTech } from "@/components/info/InfoTech";
import { MenuMobile } from "@/components/menuMobile/MenuMobile";
import { MyPortfolio } from "@/components/portfolio/MyPortfolio";
import { Nav } from "@/components/nav/Nav";
import { RedesAndLogo } from "@/components/redesLogo/Redes&Logo";
import { Skill } from "@/components/skill/Skill";
import { listAbout } from "@/data/listAbout";
import { listContact } from "@/data/listContact";
import { listFooter } from "@/data/listFooter";
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

  const showMore = () => {
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

        <section className="px-2 flex justify-center items-center py-30">
          <Nav menu={listNav} />
        </section>

        <section>
          <InfoTech infoTech={listInfoTech} />
        </section>

        <section>
          <AboutMe aboutMe={listAbout} />
          
        </section>

        <section>
          <Skill abilite={listSkills} />
        </section>

        <section>
          <MyPortfolio works={listProtfolio} btnClick={showMore} />
        </section>

        <section>
          <ContactMe contact={listContact} />
        </section>

        <section>
          <Foot foot={listFooter} />
        </section>

      </div> {/* fim container */}
    </div>
  );
}

export default Page;