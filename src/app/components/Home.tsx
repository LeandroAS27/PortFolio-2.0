"use client";

//images
import Image from "next/image";
import email from '../../../public/icons8-nova-mensagem-96.png'
import foto from '../../../public/unknown5.png'
import whatapp from '../../../public/icons8-whatsapp-96.png'
import instagram from '../../../public/icons8-instagram-96.png'
import github from '../../../public/icons8-github-96.png'
import linkedin from '../../../public/icons8-linkedin-96.png'
import seta from '../../../public/icons8-seta-longa-abaixo-96.png'


//chakra ui
import { Switch } from "@/components/ui/switch";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";
import { ClipboardIconButton, ClipboardRoot } from "@/components/ui/clipboard"

//framer motion
import { motion } from "framer-motion";

//context
import { useTheme } from "../context/ThemeContext";


const Initial: React.FC = () => {
    const [activeSection, setActiveSection ] = useState<string>('home');
    const [isClient, setIsClient] = useState<boolean>(false);
    const { isDarkMode, toggleTheme } = useTheme();

    const scrollToSection = (section:string) =>{
        const target = document.getElementById(section);
        if(target){
            const yOffset = -100
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth',
            });
        }
    }


    useEffect(() => {
        setIsClient(true);
            const handleScroll = () => {
                const sections = document.querySelectorAll<HTMLElement>('section');
                let currentSections = 'home'
    
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop - 100;
                    if(window.scrollY >= sectionTop){
                        currentSections = section.getAttribute('id') || 'home';
                    }
                });
                setActiveSection(currentSections);
            };
            if(isClient){
                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }
    }, [isClient])

    return(
        <>
            <header className="flex flex-col sm:flex-row items-center justify-between w-full bg-[#808080] dark:bg-[#171616] h-auto sm:h-20 px-4 shadow-[rgba(255,255,255,0.9)]">
                <div className="flex items-center space-x-2 my-4">
                    <Image 
                    src={email} 
                    alt="icone de email" 
                    width={32} height={32} 
                    className="object-contain filter dark:invert"/>

                    <p className="font-lato dark:text-white text-black">leandroASdev@gmail.com</p>

                    <ClipboardRoot value="leandroAS27@gmail.com">
                        <ClipboardIconButton color="yellow.500" />
                    </ClipboardRoot>

                </div>
                <nav className="flex flex-wrap items-center space-x-4 font-montserrat">
                    <ul className="flex text-center space-x-1 sm:space-x-4 font-montserrat">
                        {['Home', 'Sobre', 'Serviços', 'Projetos', 'Contatos'].map((section) => (
                            <li key={section}>
                                <motion.button
                                whileHover={{ scale: 1.1, color: "#FBBF24" }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => scrollToSection(section)}
                                className={`text-lg font-medium hover:underline underline-offset-4 hover:decoration-2 ${activeSection === section ? 'text-yellow-500' : ''}`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </motion.button>
                            </li>
                        ))}
                    </ul>
                    <Switch
                        colorPalette="blue"
                        size="lg"
                        className="my-4 hidden sm:block"
                        checked={isDarkMode}
                        onChange={toggleTheme}
                        trackLabel={{
                            on:
                                <FaSun color="yellow"/>,
                            off:
                                <FaMoon color="gray"/>
                        }}
                    />
                </nav>
            </header>

            <main>
                <section id="Home" className="h-screen min-h-screen w-full bg-[#e3e3e3] dark:bg-[#1c1a1a] flex justify-center items-center px-6 relative">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
                        {/* Foto com borda azul Glow */}
                        <div className="flex justify-center sm:justify-start items-center">
                            <Image 
                            src={foto} 
                            alt="Minha foto" 
                            className="object-cover w-48 h-48 rounded-full border-4 border-blue-600 shadow-[0_0_20px_5px_rgba(65,105,225,0.5)]"
                            />
                        </div>

                        {/* Informações ao lado da imagem */}
                        <div className="sm:ml-10 flex flex-col max-w-2xl gap-4 text-center sm:text-left">
                            <div>
                                <h1 className="text-4xl font-bold mb-2 font-montserrat text-black dark:text-white">Olá, meu nome é Leandro &#128075;</h1>
                                <h2 className="text-2xl font-montserrat"><strong className="text-[#4169E1]">Desenvolvedor Front-End</strong></h2> {/* colocar a cor azul royal */}
                                <p className="mt-4 text-md leading-relaxed text-wrap font-lato text-black dark:text-white">Sou desenvolvedor front-end 
                                com experiência em criar aplicações web modernas e funcionais, 
                                utilizando tecnologias como React, JavaScript, TypeScript, Redux, Tailwind e SASS. 
                                Meu foco está em ajudar negócios a se destacarem com interfaces que são rápidas, 
                                responsivas e que encantam os usuários.</p>
                            </div>
                            {/* Botões de redes sociais */}
                            <div className="flex justify-center sm:justify-start gap-4 mt-6">
                                <a 
                                href="https://www.linkedin.com/in/leandroas27/" 
                                target="_blank"
                                className="rounded-full border-2 border-blue-500 p-2 transition duration-75 ease hover:border-blue-800 hover:scale-125"
                                >
                                    <Image 
                                    src={linkedin} 
                                    alt="Logo do linkedin" 
                                    width={32} height={32}
                                    className="filter dark:invert"
                                    />
                                </a>
                                <a 
                                href="https://www.instagram.com/"
                                target="_blank"
                                className="rounded-full border-2 border-blue-500 p-2 transition duration-75 ease hover:border-blue-800 hover:scale-125">
                                    <Image 
                                    src={instagram} 
                                    alt="Logo do Instagram" 
                                    width={32} height={32}
                                    className="filter dark:invert"
                                    />
                                </a>
                                <a 
                                href="https://wa.me/5511985964520"
                                target="_blank"
                                className="rounded-full border-2 border-blue-500 p-2 transition duration-75 ease hover:border-blue-800 hover:scale-125">
                                    <Image 
                                    src={whatapp}
                                    alt="Logo do whatsapp" 
                                    width={32} height={32}
                                    className="filter dark:invert"
                                    />
                                </a>
                                <a 
                                href="https://github.com/LeandroAS27"
                                target="_blank"
                                className="rounded-full border-2 border-blue-500 p-2 transition duration-75 ease hover:border-blue-800 hover:scale-125">
                                    <Image 
                                    src={github} 
                                    alt="Logo do github" 
                                    width={32} height={32}
                                    className="filter dark:invert"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="absolute -bottom-20 sm:bottom-0 left-0 right-0 flex justify-center mb-20 filter dark:invert">
                            <Image 
                            src={seta} 
                            alt="imagem de uma seta para baixo"
                            width={40} height={40}/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Initial;
