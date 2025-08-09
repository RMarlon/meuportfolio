import { Abilites } from "@/types/Abilites";

type Props = {
    abilite: Abilites[];
}

export const Skill = ({ abilite }: Props) => {
    return (
        <div id="skill">
            {abilite.map(item => (
                <div>
                    <div className="py-20 flex flex-col items-center px-10"> {/* início habilidades */}

                        <div>
                            <h2 className="text-white text-4xl text-center md:text-justify md:text-6xl">{item.skills[0]} <span className="text-[#410085]">{item.skills[1]}</span></h2>
                        </div>

                        <div className="py-10 grid grid-cols-1  lg:grid-cols-3 gap-5">

                            <div className="w-full bg-gray-950 flex flex-col justify-center items-center p-7 md:flex-row rounded-md shadow shadow-[#410085]">
                                <img src={item.html[0]} alt="icon html" className="" />

                                <div className="flex flex-col">

                                    <h3 className="text-white text-2xl pb-2">{item.html[1]}</h3>
                                    <p className="text-gray-600 text-justify text-[14px]">
                                        {item.html[2]}
                                    </p>

                                    <div className="flex justify-end">
                                        <small><a className="duration-200 ease-in-out hover:border-b border-gray-600 hover:text-[#410085] hover:pb-1" href={item.html[4]} target="_blank">{item.html[3]}</a></small>
                                    </div>
                                </div>

                            </div>

                            <div className="w-full bg-gray-950 flex flex-col justify-center items-center p-7 md:flex-row rounded-md shadow shadow-[#410085]">
                                <img src={item.css[0]} alt="icon css" className="" />

                                <div className="flex flex-col">

                                    <h3 className="text-white text-2xl pb-2">{item.css[1]}</h3>
                                    <p className="text-gray-600 text-justify text-[14px]">
                                        {item.css[2]}
                                    </p>

                                    <div className="flex justify-end">
                                        <small><a className="duration-200 ease-in-out hover:border-b border-gray-600 hover:text-[#410085] hover:pb-1" href={item.css[4]} target="_blank">{item.css[3]}</a></small>
                                    </div>
                                </div>

                            </div>

                            <div className="w-full bg-gray-950 flex flex-col justify-center items-center p-7 md:flex-row rounded-md shadow shadow-[#410085]">
                                <img src={item.js[0]} alt="icon javascript" className="" />

                                <div className="text-white flex flex-col">

                                    <h3 className="text-2xl pb-2">{item.js[1]}</h3>
                                    <div>
                                        <p className="text-gray-600 text-justify text-[14px]">
                                            {item.js[2]}
                                        </p>
                                    </div>

                                    <div className="flex justify-end">
                                        <small><a className="duration-200 ease-in-out hover:border-b border-gray-600 hover:text-[#410085] hover:pb-1" href={item.js[4]} target="_blank">{item.js[3]}</a></small>
                                    </div>
                                </div>

                            </div>

                            <div className="w-full bg-gray-950 flex flex-col justify-center items-center p-7 md:flex-row rounded-md shadow shadow-[#410085]">
                                <img src={item.ts[0]} alt="icon typescript" className="" />

                                <div className="text-white flex flex-col">

                                    <h3 className="text-2xl pb-2">{item.ts[1]}</h3>
                                    <div>
                                        <p className="text-gray-600 text-justify text-[14px]">
                                            {item.ts[2]}
                                        </p>
                                    </div>

                                    <div className="flex justify-end">
                                        <small><a className="duration-200 ease-in-out hover:border-b border-gray-600 hover:text-[#410085] hover:pb-1" href={item.ts[4]} target="_blank">{item.ts[3]}</a></small>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full bg-gray-950 flex flex-col justify-center items-center p-7 md:flex-row rounded-md shadow shadow-[#410085]">
                                <img src={item.tailwindcss[0]} alt="icon talwindcss" className="" />

                                <div className="flex flex-col">

                                    <h3 className="text-white text-2xl pb-2">{item.tailwindcss[1]}</h3>
                                    <div>
                                        <p className="text-gray-600 text-justify text-[14px]">
                                            {item.tailwindcss[2]}
                                        </p>
                                    </div>

                                    <div className="flex justify-end">
                                        <small><a className="duration-200 ease-in-out hover:border-b border-gray-600 hover:text-[#410085] hover:pb-1" href={item.tailwindcss[4]} target="_blank">{item.tailwindcss[3]}</a></small>
                                    </div>
                                </div>

                            </div>

                            <div className="w-full bg-gray-950 flex flex-col justify-center items-center p-7 md:flex-row rounded-md shadow shadow-[#410085]">
                                <img src={item.react[0]} alt="icon react" className="" />

                                <div className="flex flex-col">

                                    <h3 className="text-white text-2xl pb-2">{item.react[1]}</h3>
                                    <div className="">
                                        <p className="text-gray-600 text-justify text-[14px] ">
                                            {item.react[2]}
                                        </p>
                                    </div>

                                    <div className="flex justify-end">
                                        <small><a className="duration-200 ease-in-out hover:border-b border-gray-600 hover:text-[#410085] hover:pb-1" href={item.react[4]} target="_blank">{item.react[3]}</a></small>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> {/* início habilidades */}
                </div>
            ))}
        </div>
    );
}