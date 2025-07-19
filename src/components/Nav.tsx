import { NavMenu } from "@/types/NavMenu";

type Props = {
    menu:NavMenu[];
}

export const Nav = ({menu}: Props) =>{
    return(
        <div>
            {menu.map(item =>(
                <div className="xl:w-screen lg:gap-20 max-w-6xl flex items-center justify-between">
                    <div className="hidden lg:flex gap-4 text-gray-600 text-2xl py-10 relative">
                        <button className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-gray-600"><a href={item.btnLink1}>Início</a></button>
                        <button className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-gray-600"><a href={item.btnLink2}>Sobre Mim</a></button>
                        <button className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-gray-600"><a href={item.btnLink3}>Habilidades</a></button>
                        <button className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-gray-600"><a href={item.btnLink4}>Portfólio</a></button>
                    </div>
                    <div>
                        <img src={item.img} alt="minha foto" className="w-[200px] xl:w-[300px] rounded-full shadow shadow-purple-800" />
                    </div>
               </div>
            ))}
        </div>
    );
}