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
                    <button onClick={handleClick} className="absolute right-17 top-[7px]  cursor-pointer lg:hidden">
                        <img src={item.imgBurgerMenu} alt="icon menu burger" className="w-10 sm:ml-12" />
                    </button>

                    <div id="menu" onClick={handleClick} className="w-80 h-full fixed top-0 right-0 bg-linear-to-r from-black to-[#410085] flex flex-col m-auto transition duration-300 ease-in-out translate-x-full">

                        <button  className="h-20 text-3xl text-purple-400 flex justify-between items-center duration-200 ease-in-out hover:text-black cursor-pointer">
                            <div className="w-50"><img src={item.imgLogo} alt="icon logo" /></div>
                            <img src={item.imgBtnCloseMenu} alt="icon close" className="w-8 h-8 mr-4" />
                        </button>

                        <nav className="flex items-center">
                            <ul className="flex flex-col text-2xl gap-10 text-white  m-auto">
                                <li><Link className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-gray-600 pb-2" href={item.linkStart}>{item.btnStart}</Link></li>
                                <li><Link className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-gray-600 pb-2" href={item.linkAbout}>{item.btnAbout}</Link></li>
                                <li><Link className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-gray-600 pb-2" href={item.linkSkills}>{item.btnSkills}</Link></li>
                                <li><Link className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-gray-600 pb-2" href={item.linkPortfolio}>{item.btnPortfolio}</Link></li>
                                <li><Link className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-gray-600 pb-2" href={item.linkContact}>{item.btnContact}</Link></li>
                            </ul>
                        </nav>

                        <div className="w-50 mt-[50%] rotate-90 text-3xl text-gray-500 flex justify-center m-auto opacity-20">
                            <p>Dev Fron-End</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}