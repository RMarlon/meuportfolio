import { Heade } from "@/components/Heade";
import { Nav } from "@/components/Nav";
import { RedesAndLogo } from "@/components/Redes&Logo";
import { listHead } from "@/data/listHead";
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

        <div className="max-w-6xl m-auto hidden lg:flex justify-between items-center">

          <div className="">
            <img src="assets/front.png" alt="" />
          </div>

          <div className="pr-4 xl:p-0">
            <h1 className="text-6xl mb-10  text-gray-600">Programador Web</h1>
            <h2 className="text-5xl text-[#410085]">Front - End</h2>
            <div className="mt-10">redes</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Page;