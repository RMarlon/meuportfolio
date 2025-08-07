import { Portfolio } from "@/types/Portfolio";

type Props = {
    works: Portfolio[];
    btnClick: () => void;
}

export const MyPortfolio = ({ works, btnClick }: Props) => {
    return (
        <div id="portfolio">
            {works.map(item => (
                <div>
                    <div className="flex flex-col items-center bg-gray-950 py-10 "> {/* início portfólio */}
                        <div className="">
                            <h2 className="text-white text-4xl text-center md:text-6xl md:text-left">{item.meuProtfolio[0]} <span className="text-[#410085]">{item.meuProtfolio[1]}</span></h2>
                            <p className="text-gray-600 mt-4 px-10 lg:px-0">
                                {item.description}
                            </p>
                        </div>

                        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">

                            <a href={item.linkWomanFashion} target="_blank">
                                <div className="min-w-50 h-[400px] shadow shadow-[#410085] rounded-md  bg-[url(/assets/womanfashion.png)] bg-cover bg-position-[bottom-0rem] hover:bg-position-[left_bottom_10rem] duration-[10s]">
                                    <div className="w-full h-full hover:bg-[#40008556] duration-400 ease-in-out rounded-md flex items-center justify-center">Waman Fashion</div>
                                </div>
                            </a>

                            <a href={item.linkMedicenter} target="_blank" className="">
                                <div className="min-w-50 h-[400px] shadow shadow-[#410085] rounded-md bg-[url(/assets/medicenter.png)] bg-cover bg-position-[bottom-0rem] hover:bg-position-[left_bottom_10rem] duration-[10s]">
                                    <div className="w-full h-full hover:bg-[#40008556] duration-400 ease-in-out rounded-md flex items-center justify-center">Medicenter</div>
                                </div>
                            </a>

                            <a href={item.linkStarbucks} target="_blank">
                                <div className="min-w-50 h-[400px]  shadow shadow-[#410085] rounded-md flex items-center justify-center bg-[url(/assets/starbucks.png)] bg-cover bg-position-[bottom-0rem] hover:bg-position-[left_bottom_10rem] duration-[10s]">
                                    <div className="w-full h-full hover:bg-[#40008556] duration-400 ease-in-out rounded-md flex items-center justify-center">Starbucks</div>
                                </div>
                            </a>

                            <a href={item.linkUmaMercearia} target="_blank">
                                <div className="min-w-50 h-[400px] shadow shadow-[#410085] rounded-md flex items-center justify-center bg-[url(/assets/umamercearia.png)] bg-cover bg-position-[bottom-0rem] hover:bg-position-[left_bottom_10rem] duration-[10s]">
                                    <div className="w-full h-full hover:bg-[#40008556] duration-400 ease-in-out rounded-md flex items-center justify-center">Uma Mercearia</div>
                                </div>
                            </a>

                            <div id="hidden" onClick={btnClick} className="hidden">
                                <a href={item.linkWomanFashion} target="_blank">
                                    <div className="min-w-50 h-[400px] shadow shadow-[#410085] rounded-md  bg-[url(/assets/awax.png)] bg-cover bg-position-[bottom-0rem] hover:bg-position-[left_bottom_10rem] duration-[10s]">
                                        <div className="w-full h-full hover:bg-[#40008556] duration-4'00 ease-in-out rounded-md flex items-center justify-center">Awax</div>
                                    </div>
                                </a>
                            </div>

                        </article>

                        <button onClick={btnClick} className="mt-10 py-2 px-4 text-2xl md:text-3xl border border-gray-600 rounded-md cursor-pointer hover:shadow hover:shadow-purple-600 duration-[1s] ease-in-out text-gray-600 hover:text-white">{item.btnMostarMais[0]} <span className="text-[#410085]">{item.btnMostarMais[1]}</span></button>
                    </div> {/* Fim portfólio */}
                </div>
            ))}
        </div>
    );
}