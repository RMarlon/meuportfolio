import { Footer } from "@/types/Footer";

type Props = {
    foot: Footer[];
}

export const Foot = ({ foot }: Props) => {
    return (
        <div>
            {foot.map(item => (
                <div>
                    <div className="flex items-center justify-between px-3 py-10 bg-gray-950">
                        <small className="flex items-center gap-2 text-gray-600">
                            <img src={item.copy[0]} alt="" className="w-7" />
                            {item.copy[1]}
                        </small>

                        <div className="">
                            <img src={item.logo} alt="" className="w-[17rem] " />
                        </div>

                        <div className="flex gap-2">

                            <a href={item.linkSotial[0]} target="_blank" className="hover:opacity-80">
                                <img src={item.imgSotial[0]} alt="" className="w-7" />
                            </a>

                            <a href={item.linkSotial[1]} target="_blank" className="hover:opacity-80">
                                <img src={item.imgSotial[1]} alt="" className="w-7" />
                            </a>

                            <a href={item.linkSotial[2]} target="_blank" className="hover:opacity-80">
                                <img src={item.imgSotial[2]} alt="" className="w-7" />
                            </a>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}