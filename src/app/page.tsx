"use client"

import { Heade } from "@/components/Heade";
import { InfoTech } from "@/components/InfoTech";
import { Nav } from "@/components/Nav";
import { RedesAndLogo } from "@/components/Redes&Logo";
import { listHead } from "@/data/listHead";
import { listInfoTech } from "@/data/listInfoTech";
import { listNav } from "@/data/listNav";
import { listRedesAndLogo } from "@/data/listRedes&Logo";


const Page = () => {
  return (
    <div className="bg-gray-950 rounded-md relative z-10">

        <div>
          <RedesAndLogo redeLogo={listRedesAndLogo}/>
        </div>


      <div className="bg-black font-display container mx-auto shadow shadow-[#410085]">
        <Heade head={listHead} />

        <div className="px-2 flex justify-center items-center py-30">
          <Nav menu={listNav} />
        </div>

        <div>
            <InfoTech infoTech={listInfoTech} />
        </div>
      </div>
    </div>
  );
}

export default Page;