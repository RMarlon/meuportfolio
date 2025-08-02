import { MobileMenu } from "@/types/MobileMenu";
import Link from "next/link";



type Props = {
    menu: MobileMenu[];
    handleClick: () => void;
}

export const MenuMobile = ({ menu, handleClick }: Props) => {
    return (
        <div>
            {menu.map(item => (
                <div>
                    <button onClick={handleClick} className="absolute right-7 top-[7px]  cursor-pointer md:right-[1rem] lg:hidden">
                        <img src={item.imgBurgerMenu} alt="icon menu burger" className="w-10 " />
                    </button>

                    <div id="menu" onClick={handleClick} className="w-70 h-full fixed top-0 right-0 md:w-80 bg-linear-to-r from-black to-[#410085] flex flex-col m-auto transition duration-300 ease-in-out translate-x-full">

                        <button  className="h-20 text-3xl text-purple-400 flex justify-between items-center duration-200 ease-in-out hover:text-black cursor-pointer">
                            <div><img className="w-40" src={item.imgLogo} alt="icon logo" /></div>
                            <img src={item.imgBtnCloseMenu} alt="icon close" className="w-8 h-8 mr-10" />
                        </button>

                        <nav className="flex items-center">
                            <ul className="flex flex-col text-[18px] gap-10 text-white  m-auto md:text-2xl">
                                <li><Link className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-white pb-2" href={item.linkStart}>{item.btnStart}</Link></li>
                                <li><Link className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-white pb-2" href={item.linkAbout}>{item.btnAbout}</Link></li>
                                <li><Link className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-white pb-2" href={item.linkSkills}>{item.btnSkills}</Link></li>
                                <li><Link className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-white pb-2" href={item.linkPortfolio}>{item.btnPortfolio}</Link></li>
                                <li><Link className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-white pb-2" href={item.linkContact}>{item.btnContact}</Link></li>
                            </ul>
                        </nav>

                        <div className="w-40 mt-[50%] text-[18px] md:text-0 md:w-50 rotate-90 text-3xl text-gray-500 flex justify-center m-auto opacity-20">
                            <p>Dev Fron-End</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}