"use client"

//images
import Image from "next/image";
import commerce from "../../../public/Tela inicial.png";
import arrow from "../../../public/icons8-para-a-direita-com-quadrado-96.png";
import github from '../../../public/icons8-github-96.png';

//framer motion
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const Projects:React.FC = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return(
        <motion.section 
            id="Projetos"
            ref={ref}
            className="min-h-screen bg-[#bfbfbf] dark:bg-[#292626] w-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl my-8 text-black dark:text-white text-montserrat">Projetos</h1>
            <motion.div 
            initial={{opacity:0, y: 50}}
            animate={inView ? { opacity: 1, y: 0} : {}}
            transition={{ duration: 0.9, ease: "easeOut"}}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 justify-center items-center">
                {/* card do projeto 1 */}
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3}}
                    className="bg-transparent border-2 border-white w-full h-full p-6 shadow-lg rounded hover:shadow-[0_0_12px_5px_rgba(65,105,225,0.5)]"
                >
                    <h1 className="text-2xl text-center mb-4 font-bold font-montserrat text-white">CommerceComics</h1>
                    <div className="w-full h-48 relative">
                        <Image 
                            src={commerce} 
                            alt="imagem do projeto ecommerce"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>

                    <div className="p-4">
                        <div className="flex justify-between mb-4 space-x-4">
                            <a 
                                href="https://comics-commerce.vercel.app" 
                                target="_blank" 
                                className="flex items-center justify-center font-lato gap-2 py-2 px-4 bg-transparent border-2 border-white text-white rounded-md hover:bg-blue-600 transition-colors"
                            >
                            <Image 
                                src={arrow} 
                                alt="icone de uma seta para a direita"
                                width={32} height={32}
                                className="filter dark:invert"
                            />
                                Prévia
                            </a>

                            <a 
                                href="https://github.com/LeandroAS27/ComicsCommerce" 
                                target="_blank" 
                                className="flex items-center justify-center font-lato gap-2 py-2 px-4 bg-transparent border-2 border-white text-white rounded-md hover:bg-blue-600 transition-colors"
                            >
                            <Image 
                                src={github} 
                                alt="icone do github" 
                                width={32} height={32}
                                className="fliter dark:invert"
                            />
                                Repositório
                            </a>
                        </div>
                    </div>
                    <p className="text-black dark:text-white text-md font-lato">
                    Este é um projeto de ecommerce desenvolvido em <strong>React</strong> inspirado no <strong>universo Marvel</strong>, com o objetivo de listar e detalhar quadrinhos utilizando a API oficial da Marvel.
                    </p>
                </motion.div>
                {/* card do projeto 2 */}
                <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3}}
                className="bg-transparent border-2 border-white w-full h-full p-6 shadow-lg rounded hover:shadow-[0_0_12px_5px_rgba(65,105,225,0.5)]"
                >
                    <div className="w-full h-48 relative">
                        <Image 
                        src={commerce} 
                        alt="imagem do projeto ecommerce"
                        layout="fill"
                        objectFit="contain"
                        />
                    </div>

                    <div className="p-4">
                        <div className="flex justify-between mb-4 space-x-4">
                            <a 
                            href="https://comics-commerce.vercel.app" 
                            target="_blank" 
                            className="flex items-center justify-center gap-2 py-2 px-4 bg-transparent border-2 border-white text-white rounded-md hover:bg-blue-600 transition-colors">
                            <Image 
                            src={arrow} 
                            alt="icone de uma seta para a direita" 
                            className=""
                            width={32} height={32}/>
                                Prévia
                            </a>

                            <a 
                            href="https://github.com/LeandroAS27/ComicsCommerce" 
                            target="_blank" 
                            className="flex items-center justify-center gap-2 py-2 px-4 bg-transparent border-2 border-white text-white rounded-md hover:bg-blue-600 transition-colors">
                            <Image 
                            src={github}
                            alt="icone do github" 
                            width={32} height={32}/>
                                Repositório
                            </a>

                        </div>
                    </div>
                    <p className="text-black dark:text-white text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Animi alias temporibus vel doloremque ullam, eum, eligendi placeat ad debitis dolores hic odit. 
                        Quaerat exercitationem ducimus, consequatur doloremque cumque sunt saepe!
                    </p>
                </motion.div>
                {/* card do projeto 3 */}
                <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3}}
                className="bg-transparent border-2 w-full h-full p-6 shadow-lg rounded hover:shadow-[0_0_12px_5px_rgba(65,105,225,0.5)]"
                >
                    <div className="w-full h-48 relative">
                        <Image 
                        src={commerce} 
                        alt="imagem do projeto ecommerce"
                        layout="fill"
                        objectFit="contain"
                        />
                    </div>

                    <div className="p-4">
                        <div className="flex justify-between mb-4 space-x-4">
                            <a 
                            href="https://comics-commerce.vercel.app" 
                            target="_blank" 
                            className="flex items-center justify-center gap-2 py-2 px-4 bg-transparent border-2 text-white rounded-md hover:bg-blue-600 transition-colors">
                            <Image 
                            src={arrow} 
                            alt="icone de uma seta para a direita" 
                            width={32} height={32}/>
                                Prévia
                            </a>

                            <a 
                            href="https://github.com/LeandroAS27/ComicsCommerce"
                            target="_blank" 
                            className="flex items-center justify-center gap-2 py-2 px-4 bg-transparent border-2 text-white rounded-md hover:bg-blue-600 transition-colors">
                            <Image 
                            src={github} 
                            alt="icone do github" width={32} height={32}/>
                                Repositório
                            </a>

                        </div>
                    </div>
                    <p className="text-white text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Animi alias temporibus vel doloremque ullam, eum, eligendi placeat ad debitis dolores hic odit. 
                        Quaerat exercitationem ducimus, consequatur doloremque cumque sunt saepe!
                    </p>
                </motion.div>
                {/* card do projeto 4 */}
                <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3}}
                className="bg-transparent border-2 w-full h-full p-6 shadow-lg rounded hover:shadow-[0_0_12px_5px_rgba(65,105,225,0.5)]"
                >
                    <div className="w-full h-48 relative">
                        <Image 
                        src={commerce} 
                        alt="imagem do projeto ecommerce"
                        layout="fill"
                        objectFit="contain"
                        />
                    </div>

                    <div className="p-4">
                        <div className="flex justify-between mb-4 space-x-4">
                            <a 
                            href="https://comics-commerce.vercel.app" 
                            target="_blank" 
                            className="flex items-center justify-center gap-2 py-2 px-4 bg-transparent border-2 text-white rounded-md hover:bg-blue-600 transition-colors">
                            <Image 
                            src={arrow} 
                            alt="icone de uma seta para a direita" 
                            width={32} height={32}/>
                                Prévia
                            </a>

                            <a 
                            href="https://github.com/LeandroAS27/ComicsCommerce" 
                            target="_blank" 
                            className="flex items-center justify-center gap-2 py-2 px-4 bg-transparent border-2 text-white rounded-md hover:bg-blue-600 transition-colors">
                            <Image 
                            src={github} 
                            alt="icone do github" 
                            width={32} height={32}/>
                                Repositório
                            </a>
                        </div>
                    </div>
                    <p className="text-white text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Animi alias temporibus vel doloremque ullam, eum, eligendi placeat ad debitis dolores hic odit. 
                        Quaerat exercitationem ducimus, consequatur doloremque cumque sunt saepe!
                    </p>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default Projects;