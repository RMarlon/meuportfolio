import { Heade } from "@/components/Heade";
import { listHead } from "@/data/listHead";


const Page = () => {
  return (
    <div className="container mx-auto border mt-6">
      <div className="bg-black">
            <Heade head={listHead}/>

            <div className="px-2 flex justify-around items-center h-screen">
              <div>botões</div>
              <div>minha foto</div>
            </div>
      </div>
    </div>
  );
}

export default Page;