import { Heade } from "@/components/Heade";
import { listHead } from "@/data/listHead";


const Page = () => {
  return (
    <div className="container mx-auto border mt-6">
      <div className="bg-black">
            <Heade head={listHead}/>
      </div>
    </div>
  );
}

export default Page;