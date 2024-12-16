"use client";

import Image from "next/image";

//hooks
import useIsHomeVisible from "../hooks/useIsHomeVisible";

//material ui
import { Switch } from "@/components/ui/switch";
import { FaMoon, FaSun } from "react-icons/fa";

//images
import casa from '../../../public/icons8-casa-96.png';
import sobre from '../../../public/icons8-pessoa-do-sexo-masculino-96.png';
import servicos from '../../../public/icons8-mala-96.png';
import projetos from '../../../public/icons8-projeto-96.png';
import contato from '../../../public/icons8-nova-mensagem-96.png';

const ModalHeader = () => {
    const isHomeVisible = useIsHomeVisible();


    return(
        <>
            <div 
            className={`fixed w-full sm:w-1/4 flex justify-center space-x-4 items-center top-4 right-4 bg-[#e3e3e3] bg-opacity-80 text-white p-4 sm:p-6 rounded-lg shadow-lg transition-transform ${
                isHomeVisible ? 'translate-y-[-200%]' : 'translate-y-[0]'
            }`}
            >
                <a href="#Home" className="relative group">
                    <Image 
                    src={casa} 
                    alt='Icone de uma casa' 
                    width={32} height={32} 
                    className="transition duration-300 filter invert hover:invert-0 hover:text-blue-500"/>
                    <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition">
                    Início
                    </span>
                </a>
                <a href="#Sobre" className="relative group">
                    <Image 
                    src={sobre} 
                    alt='Icone de uma pessoa' 
                    width={32} height={32} 
                    className="transition duration-300 filter invert hover:invert-0 hover:text-blue-500"/>
                    <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition">
                        Sobre
                    </span>
                </a>
                <a href="#Serviços" className="relative group">
                    <Image 
                    src={servicos} 
                    alt='' 
                    width={32} height={32} 
                    className="transition duration-300 filter invert hover:invert-0 hover:text-blue-500"/>
                    <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition">
                        Serviços
                    </span>
                </a>
                <a href="#Projetos" className="relative group">
                    <Image 
                    src={projetos} 
                    alt='' 
                    width={32} height={32} 
                    className="transition duration-300 filter invert hover:invert-0 hover:text-blue-500"/>
                    <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition">
                        Projetos
                    </span>
                </a>
                <a href="#Contatos" className="relative group">
                    <Image 
                    src={contato} 
                    alt='' 
                    width={32} height={32} 
                    className="transition duration-300 filter invert hover:invert-0 hover:text-blue-500"/>
                    <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition">
                        Contato
                    </span>
                </a>
                <Switch
                        colorPalette="blue"
                        size="lg"
                        trackLabel={{
                            on:
                                <FaSun color="yellow"/>,
                            off: 
                                <FaMoon color="gray"/>
                        }}
                    />
            </div>
        </>
    )
}

export default ModalHeader;