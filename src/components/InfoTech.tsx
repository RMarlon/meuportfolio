import { InfoTechs } from "@/types/InfoTechs";

type Props = {
    infoTech: InfoTechs[];
}

export const InfoTech = ({ infoTech }: Props) => {
    return (
        <div>
            {infoTech.map(item => (

                <div className="max-w-6xl m-auto flex lg:justify-between items-center justify-center">
                    <div className="hidden lg:inline">
                        <img src={item.img} alt="front image" />
                    </div>

                    <div className="pr-4 xl:p-0 flex flex-col items-center lg:items-start">
                        <h1 className="text-6xl mb-10 text-gray-600 text-center lg:normal">{item.info}</h1>
                        <h2 className="text-5xl text-[#410085]">{item.tech}</h2>
                        <div className="mt-10 flex justify-center lg:justify-normal gap-4 ">

                            <a href={item.urlLinkedin} target="_blank">
                                <img src={item.imgLinkdin} alt="" className="w-10 duration-200 ease-in-out hover:opacity-80" />
                            </a>

                            <a href={item.urlInstagram} target="_blank">
                                <img src={item.imgInstagram} alt="" className="w-10 duration-200 ease-in-out hover:opacity-80" />
                            </a>

                            <a href={item.urlGithub} target="_blank">
                                <img src={item.imgGithub} alt="" className="w-10 duration-200 ease-in-out hover:opacity-80" />
                            </a>
                        </div>

                        <button 
                        className="mt-10 mb-10 cursor-pointer border border-gray-600 w-full py-2 rounded-md tracking-wide text-2xl text-gray-600 duration-[1s] ease-in-out hover:text-[#410085] hover:shadow hover:shadow-purple-600"> 
                        <a href="#" target="_blank">Entre em contato</a>
                        </button>

                    </div>
                </div>

            ))}
        </div>
    );
}