import { Heade } from "@/components/Heade";
import { Nav } from "@/components/Nav";
import { listHead } from "@/data/listHead";
import { listNav } from "@/data/listNav";


const Page = () => {
  return (
    <div className="container mx-auto border mt-6">
      <div className="bg-black font-display">
            <Heade head={listHead}/>

            <div className="px-2 flex justify-center items-center h-screen ">
              <Nav menu={listNav}/>
            </div>
              <div className="border">0</div>
      </div>
    </div>
  );
}

export default Page;