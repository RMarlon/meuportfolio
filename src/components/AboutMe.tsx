import { About } from "@/types/About";

type Props = {
    aboutMe: About[];
}
export const AboutMe = ({ aboutMe }: Props) => {
    return (
        <div>
            {aboutMe.map(item => (
                <div>
                    <div className="flex flex-col-reverse items-center md:flex-row md:justify-around bg-gray-950 py-10">
                        <div>
                            <h2 className="text-6xl">{item.about} <span className="text-[#410085]">{item.me}</span></h2>
                            <div className="w-[400px] flex">
                                <p className="text-justify  text-[18px] text-gray-600 mt-4">
                                  {item.desc}
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={item.myImg} alt="minha foto" className="h-96 rounded-md shadow shadow-[#410085]" />
                            <p className="text-center mt-4 text-2xl pb-10">{item.hello}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}