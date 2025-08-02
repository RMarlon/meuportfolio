import { Header } from "@/types/Header";

type Props = {
    head: Header[];
}
export const Heade = ({ head }: Props) => {
    return (
        <div>
            {head.map(item => (

                <header className="flex items-center  md:justify-evenly lg:justify-between lg:px-4 font-display text-gray-600">

                    <span className="hidden md:block">{item.name}</span>
                    <img src={item.img} alt="logo" className="w-[10rem]  mt-2"/>
                    <span className="hidden md:block duration-200 ease-in-out hover:text-[#410085]"> <a href={item.instaLink} target="_blank">@marlonsantosdev</a> </span>

                </header>
            ))}
        </div>
    );
}