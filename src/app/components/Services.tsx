"use client"

//framer motion
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

//images
import pc from '../../../public/icons8-código-do-google-96.png';
import Image from 'next/image';

const Services:React.FC = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    return(
        <motion.section 
        id="Serviços" 
        ref={ref}
        className="bg-[#cfcfcf] dark:bg-[#242121] min-h-screen w-full flex flex-col justify-center items-center"
        >
            <h1 className='font-bold text-4xl sm:text-5xl my-8 text-black dark:text-white font-montserrat'>Serviços</h1>
            <motion.div 
            whileHover={{scale: 1.1}}
            transition={{duration: 0.4, ease: "easeOut"}}
            className="bg-[#FBBF24] w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 h-auto flex flex-col justify-center items-center rounded-lg p-6 sm:p-8 sm:space-y-6">
                <motion.div 
                initial={{opacity:0, y: 50}}
                animate={inView ? { opacity: 1, y: 0} : {}}
                transition={{ duration: 0.9, ease: "easeOut"}}
                className='flex flex-col items-center gap-4'>
                    <Image 
                    src={pc} 
                    alt='imagem de um computador'
                    className='w-32 sm:w-48'
                    />
                    <h2 className='font-bold text-2xl sm:text-3xl text-center text-black dark:text-white font-montserrat'>Desenvolvimento de Site</h2>
                    <p className='text-center text-sm sm:text-md text-black dark:text-white font-lato'>
                        Transformo suas ideias em sites e lojas virtuais rápidos, interativos e responsivos. Utilizando HTML,
                        CSS, JavaScript, TypeScript e o poderoso framework React, crio interfaces modernas para seus usuários em qualquer
                        dispositivo. Com as melhores práticas de desenvolvimento, garanto uma experiência única, unindo performance, design e funcionalidade
                        para destacar o seu negócio no ambiente digital.
                    </p>
                    <a 
                    href='#Projetos' 
                    className='py-2 px-8 bg-transparent border-2 rounded-full hover:bg-[#242121] transition ease-in-out duration-125 text-white font-semibold'
                    >
                        Saiba mais
                    </a>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default Services;