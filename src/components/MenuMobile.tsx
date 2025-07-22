import { MobileMenu } from "@/types/MobileMenu";


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

                    <div id="menu" onClick={handleClick} className="w-80 h-screen fixed top-0 right-0 bg-linear-to-r from-black to-[#410085] flex flex-col m-auto transition duration-300 ease-in-out translate-x-full">

                        <button  className="h-20 text-3xl text-purple-400 flex justify-between items-center duration-200 ease-in-out hover:text-black cursor-pointer">
                            <div className="w-50"><img src={item.imgLogo} alt="icon logo" /></div>
                            <img src={item.imgBtnCloseMenu} alt="icon close" className="w-8 h-8 mr-4" />
                        </button>

                        <nav className="flex items-center  m-auto">
                            <ul className="flex flex-col text-3xl gap-10 text-white">
                                <li><a className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-gray-600 pb-2" href={item.linkStart}>{item.btnStart}</a></li>
                                <li><a className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-gray-600 pb-2" href={item.linkAbout}>{item.btnAbout}</a></li>
                                <li><a className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-gray-600 pb-2" href={item.linkSkills}>{item.btnSkills}</a></li>
                                <li><a className="duration-200 ease-in-out hover:text-[#410085] hover:border-b border-gray-600 pb-2" href={item.linkPortfolio}>{item.btnPortfolio}</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            ))}
        </div>
    );
}