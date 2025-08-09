import { Contact } from "@/types/Contact";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from "react-toastify/unstyled";


type Props = {
    contact: Contact[];
}
export const ContactMe = ({ contact }: Props) => {

    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [phone, SetPhone] = useState('');
    const [infoSystem, SetInfoSystem] = useState('');
    const [infoMensage, SetInfoMensage] = useState('');



    const sendEmail = (event: any) => {
        event.preventDefault();


        if (name === '' || email === '' || phone === '' || infoSystem === '' || infoMensage === '') {
            // alert('Os campos precisam ser preenchidos');
            toast.error('Por favor, preencha todos os campos corretamente!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });

            return;
        } else {
            // alert('Seu e-mail foi enviado com sucesso!');
            toast.success('Seu e-mail foi enviado com sucesso!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }

        const templateParms = {
            from_name: name,
            email: email,
            phone: phone,
            info: infoSystem,
            mensage: infoMensage
        }

        emailjs.send('service_nia8c9n', 'template_un79r3a', templateParms, 'fViR7rfCPt0s8g7Af')
            .then((response) => {

                console.log('EMAIL ENVIADO', response.status, response.text);
                SetName('');
                SetEmail('');
                SetPhone('');
                SetInfoSystem('');
                SetInfoMensage('');

            }, (err) => {
                console.log('ERROR', err)
            });
    }

    return (
        <div id="contact">
            {contact.map(item => (
                <div>
                    <div className="flex flex-col items-center lg:flex-row lg:justify-around py-20">
                        <div className="">
                            <h2 className="text-white text-4xl text-center md:text-6xl md:text-right">{item.contactMe[0]} <span className="text-[#410085]">{item.contactMe[1]}</span></h2>
                            <a href={item.email[0]} target="_blank" className="w-[325px] mt-4 ml-4  md:text-2xl text-gray-600 flex gap-2 hover:text-white duration-300 ease-in-out">
                                <img src={item.email[1]} alt="" className="w-7" />
                                <p>{item.email[2]}</p>
                            </a>
                            <a href={item.instagram[0]} target="_blank" className="w-[325px] mt-4 ml-4 md:text-2xl text-gray-600 flex gap-2 hover:text-white duration-300 ease-in-out">
                                <img src={item.instagram[1]} alt="" className="w-7" />
                                <p>{item.instagram[2]}</p>
                            </a>
                            <a href={item.linkedin[0]} target="_blank" className="w-[125px] mt-4 ml-4 md:text-2xl text-gray-600 flex gap-2 hover:text-white duration-300 ease-in-out">
                                <img src={item.linkedin[1]} alt="" className="w-7" />
                                <p>{item.linkedin[2]}</p>
                            </a>
                        </div>

                        <form action="#" onSubmit={sendEmail}
                            className="bg-gray-950 p-10 mt-10 text-center lg:mt-0 lg:text-justify rounded-md shadow shadow-[#410085]">
                            <input
                                type="text"
                                placeholder="Digite seu nome"
                                value={name}
                                onChange={(e) => SetName(e.target.value)}
                                className="text-white border-b border-gray-600 mr-4 mb-4 py-2 text-center focus:outline-none hover:border-[#410085] duration-200 ease-in-out"
                            />

                            <input
                                type="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => SetEmail(e.target.value)}
                                className="text-white border-b border-gray-600 mr-4 mb-4 py-2 text-center focus:outline-none hover:border-[#410085] duration-200 ease-in-out"
                            />

                            <div className="">

                                <input
                                    type="tel" placeholder="Informe seu whatsapp"
                                    value={phone}
                                    onChange={(e) => SetPhone(e.target.value)}
                                    className="text-white border-b border-gray-600 mr-4 mb-4 py-2 text-center focus:outline-none hover:border-[#410085] duration-200 ease-in-out"
                                />

                                <input
                                    type="text"
                                    placeholder="Sistema que deseja criar ?"
                                    value={infoSystem}
                                    onChange={(e) => SetInfoSystem(e.target.value)}
                                    className="text-white border-b border-gray-600 mr-4 mb-4 py-2 text-center focus:outline-none hover:border-[#410085] duration-200 ease-in-out"
                                />

                            </div>
                            <textarea
                                name="" id=""
                                placeholder="Fale mais sobre sua ideia"
                                value={infoMensage}
                                onChange={(e) => SetInfoMensage(e.target.value)}
                                className="text-white w-full border border-gray-600 mr-4 mb-4 py-2 px-1 mt-4 lg:mt-0 focus:outline-none hover:border-[#410085] duration-200 ease-in-out rounded-md"
                            ></textarea>

                            <div className="">
                                <input onClick={sendEmail} type="submit" value='Enviar' className=" w-full border border-gray-600 text-gray-600  py-2 text-2xl rounded-md hover:shadow hover:shadow-purple-600 hover:text-white duration-300 ease-in-out cursor-pointer" />
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    );
}