import { Contact } from "@/types/Contact";

type Props = {
    contact: Contact[];
}
export const ContactMe = ({ contact }: Props) => {
    return (
        <div id="contact">
            {contact.map(item => (
                <div>
                    <div className="flex flex-col items-center lg:flex-row lg:justify-around py-20">
                        <div className="">
                            <h2 className="text-6xl">{item.contactMe[0]} <span className="text-[#410085]">{item.contactMe[1]}</span></h2>
                            <a href={item.email[0]} target="_blank" className="w-[325px] mt-4 text-2xl text-gray-600 flex gap-2 hover:text-white duration-300 ease-in-out">
                                <img src={item.email[1]} alt="" className="w-7" />
                                <p>{item.email[2]}</p>
                            </a>
                            <a href={item.instagram[0]} target="_blank" className="w-[325px] mt-4 text-2xl text-gray-600 flex gap-2 hover:text-white duration-300 ease-in-out">
                                <img src={item.instagram[1]} alt="" className="w-7" />
                                <p>{item.instagram[2]}</p>
                            </a>
                            <a href={item.linkedin[0]} target="_blank" className="w-[125px] mt-4 text-2xl text-gray-600 flex gap-2 hover:text-white duration-300 ease-in-out">
                                <img src={item.linkedin[1]} alt="" className="w-7" />
                                <p>{item.linkedin[2]}</p>
                            </a>
                        </div>

                        <form action="#" className="bg-gray-950 p-10 mt-10 text-center lg:mt-0 lg:text-justify rounded-md shadow shadow-[#410085]">
                            <input type="text" placeholder="Digite seu nome" className="border-b border-gray-600 mr-4 mb-4 py-2 text-center focus:outline-none hover:border-[#410085] duration-200 ease-in-out" />
                            <input type="email" placeholder="Digite seu e-mail" className="border-b border-gray-600 mr-4 mb-4 py-2 text-center focus:outline-none hover:border-[#410085] duration-200 ease-in-out" />
                            <div className="">
                                <input type="tel" placeholder="Informe seu whatsapp" className="border-b border-gray-600 mr-4 mb-4 py-2 text-center focus:outline-none hover:border-[#410085] duration-200 ease-in-out" />
                                <input type="text" placeholder="Sistema que deseja criar" className="border-b border-gray-600 mr-4 mb-4 py-2 text-center focus:outline-none hover:border-[#410085] duration-200 ease-in-out" />
                            </div>
                            <textarea name="" id="" placeholder="Fale mais sobre sua ideia" className="w-full border border-gray-600 mr-4 mb-4 py-2 px-1 mt-4 lg:mt-0 focus:outline-none hover:border-[#410085] duration-200 ease-in-out rounded-md"></textarea>
                            <div className="">
                                <input type="submit" value='Enviar' className="w-full border border-gray-600 text-gray-600  py-2 text-2xl rounded-md hover:shadow hover:shadow-purple-600 hover:text-white duration-300 ease-in-out cursor-pointer" />
                            </div>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    );
}