import { RedesLogo } from "@/types/RedesLogo";

type Props = {
    redeLogo:RedesLogo[];
}

export const RedesAndLogo = ({redeLogo}:Props) =>{
    return(
        <div>
            {redeLogo.map(item =>(
                <div>
                   <div className="hidden 2xl:flex justify-center items-center flex-col fixed gap-4 left-[3%] top-[50%] bottom-[50%] -z-10">
                        <a href={item.linkedin} target="_blank">
                            <img src={item.imgLinkedin} alt="icone instagram" className="w-7 h-7 duration-200 ease-in-out hover:opacity-80 " />
                        </a>

                        <a href={item.instagram} target="_blank">
                            <img src={item.imgInstagram} alt="icone instagram" className="w-7 h-7 duration-200 ease-in-out hover:opacity-80 "/>
                        </a>
                        <a href={item.gitHub} target="_blank">
                            <img src={item.imgGitHub} alt="icone github" className="w-7 h-7 duration-200 ease-in-out hover:opacity-80 "/>
                        </a>
                   </div>
                   <div className="hidden 2xl:flex flex-col justify-center items-center fixed right-[1%] top-[50%] bottom-[50%] rotate-90 -z-10">
                        <img src={item.logo} alt="logo do site" className="w-[180px] h-[180px] mb-10 "/>
                   </div>
                </div>
            ))}
        </div>
    );
}